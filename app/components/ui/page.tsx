interface ComingSoonProps {
  label: string;
  title: string;
  description: string;
}

export default function ComingSoon({ label, title, description }: ComingSoonProps) {
  return (
    <div className="min-h-screen bg-canvas py-24">
      <div className="max-w-md mx-auto px-6 text-center">
        <div className="font-body text-[11px] font-semibold text-ink-tertiary tracking-[0.24em] mb-4">
          {label}
        </div>
        <h1 className="font-display text-3xl font-semibold text-ink-primary tracking-wide">
          {title}
        </h1>
        <div className="w-8 h-px bg-line mx-auto my-6" />
        <p className="font-body text-sm text-ink-secondary leading-8">
          {description}
        </p>
        <div className="mt-10 font-body text-[11.5px] text-ink-tertiary tracking-[0.06em]">
          準備中です
        </div>
      </div>
    </div>
  );
}

