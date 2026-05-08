export function Button({ children, className = "", variant = "primary", ...props }) {
  const styles = {
    primary: "bg-ink text-white hover:bg-slate-800 dark:bg-white dark:text-ink dark:hover:bg-slate-200",
    accent: "bg-bridge text-white hover:bg-teal-700",
    ghost: "bg-white/70 text-ink hover:bg-white dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
  };
  return (
    <button className={`focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-lg px-4 text-sm font-semibold transition ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
