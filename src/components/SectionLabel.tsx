interface SectionLabelProps {
  index: string;
  children: React.ReactNode;
  inverse?: boolean;
}

export default function SectionLabel({
  index,
  children,
  inverse = false,
}: SectionLabelProps) {
  return (
    <h2 className='flex items-baseline gap-3 font-mono text-[13px] font-normal'>
      <span
        aria-hidden='true'
        className={inverse ? 'text-ink' : 'text-accent-text'}
      >
        {index}
      </span>{' '}
      <span
        className={`uppercase tracking-[1px] ${inverse ? 'text-ink' : 'text-body'}`}
      >
        {children}
      </span>
    </h2>
  );
}
