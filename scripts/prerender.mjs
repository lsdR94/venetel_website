// prerender — Escribe el HTML ya resuelto de las rutas legales
//
// POR QUÉ
// El sitio es React renderizado en el cliente: el servidor entrega 1.850 bytes
// con el <body> vacío y el texto aparece solo cuando corre el JavaScript. Un
// navegador lo ve; un crawler que lea el HTML directo, no. Para el App Review
// de Meta, la política de privacidad tiene que estar en la URL que se declara,
// y no se puede asumir que quien la valide ejecute JavaScript.
//
// CÓMO
// Después de `vite build`, se renderiza cada ruta con react-dom/server dentro
// de StaticRouter y el resultado se inyecta en el index.html construido. Queda
// dist/privacidad/index.html y Cloudflare Pages lo sirve en /privacidad.
// React se monta encima al cargar, así que los tabs siguen funcionando: el
// visitante recibe la página completa de entrada en vez de una en blanco.
//
// Solo las rutas legales. El resto del sitio no lo necesita y prerenderizar la
// portada, que trae animaciones y un hero de pantalla completa, daría un HTML
// enorme sin beneficio.

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';
import { renderToString } from 'react-dom/server';
import { createElement } from 'react';
// Con la extensión: esta versión de react-router-dom no declara el subpath
// './server' en sus exports, así que el especificador sin .js no resuelve.
import { StaticRouter } from 'react-router-dom/server.js';

const raiz = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = resolve(raiz, 'dist');

// Los tres documentos, uno por cada campo que pide Meta. /legal no se
// prerenderiza: es un 301 en public/_redirects, y generarle un HTML sería
// publicar el mismo texto en dos direcciones.
const RUTAS = [
  { ruta: '/terminos-de-uso', titulo: 'Términos de Servicio — VENATEL' },
  { ruta: '/privacidad', titulo: 'Política de Privacidad — VENATEL' },
  { ruta: '/eliminacion-datos', titulo: 'Eliminación de datos — VENATEL' },
];

// Escapar para no romper el HTML si un título trae comillas o signos.
const escapar = (s) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

async function main() {
  const plantilla = await readFile(resolve(dist, 'index.html'), 'utf-8');

  if (!plantilla.includes('<div id="root"></div>')) {
    throw new Error('El index.html construido no tiene <div id="root"></div>; el prerender no sabe dónde inyectar.');
  }

  // Vite en modo middleware resuelve los alias (@/...), el TSX y el CSS que
  // los imports del proyecto esperan. Correrlo así evita tener que compilar
  // una segunda vez el bundle para Node.
  const vite = await createServer({
    root: raiz,
    appType: 'custom',
    server: { middlewareMode: true },
  });

  try {
    const { AppProviders, AppRoutes } = await vite.ssrLoadModule('/src/App.tsx');

    for (const { ruta, titulo } of RUTAS) {
      const html = renderToString(
        createElement(
          AppProviders,
          null,
          createElement(StaticRouter, { location: ruta }, createElement(AppRoutes)),
        ),
      );

      const pagina = plantilla
        .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
        .replace(
          /<title>.*?<\/title>/,
          `<title>${escapar(titulo)}</title>`,
        );

      const destino = resolve(dist, ruta.slice(1), 'index.html');
      await mkdir(dirname(destino), { recursive: true });
      await writeFile(destino, pagina, 'utf-8');
      console.log(`prerender: ${ruta} -> dist${ruta}/index.html (${pagina.length} bytes)`);
    }
  } finally {
    await vite.close();
  }
}

main().catch((err) => {
  console.error('prerender falló:', err);
  process.exit(1);
});
