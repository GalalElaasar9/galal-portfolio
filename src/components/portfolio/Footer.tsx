export function Footer() {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Galal Mohamed. Crafted with React & Framer Motion.</p>
        <p>Designed & built with care.</p>
      </div>
    </footer>
  );
}
