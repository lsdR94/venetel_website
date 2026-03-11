export const ScreenshotPlaceholder = ({ label }: { label: string }) => (
  <div className="aspect-video w-full rounded-lg bg-border flex items-center justify-center">
    <span className="text-muted-foreground text-sm font-medium">Screenshot: {label}</span>
  </div>
);
