export function ProjectSkeleton() {
  return (
    <div
      role="status"
      aria-label="Loading project"
      className="rounded-2xl border border-border bg-card overflow-hidden flex flex-col animate-pulse"
    >
      <div className="aspect-[16/10] bg-muted/70 relative overflow-hidden">
        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-foreground/5 to-transparent shimmer" />
      </div>
      <div className="p-6 space-y-3">
        <div className="h-5 w-1/2 rounded-md bg-muted" />
        <div className="h-3 w-full rounded-md bg-muted" />
        <div className="h-3 w-4/5 rounded-md bg-muted" />
        <div className="flex gap-1.5 pt-2">
          <div className="h-5 w-12 rounded-full bg-muted" />
          <div className="h-5 w-16 rounded-full bg-muted" />
          <div className="h-5 w-10 rounded-full bg-muted" />
        </div>
      </div>
    </div>
  );
}
