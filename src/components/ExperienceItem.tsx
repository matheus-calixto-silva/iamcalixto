interface ExperienceItemProps {
  company: string;
  location: string;
  role: string;
  level?: string;
  period: string;
  current?: boolean;
  description: string;
  tags: string[];
}

export default function ExperienceItem({
  company,
  location,
  role,
  level,
  period,
  current,
  description,
  tags,
}: ExperienceItemProps) {
  return (
    <li className='flex flex-wrap gap-x-12 gap-y-3 border-b border-hairline py-7 md:py-10'>
      <div className='flex flex-[1_1_220px] justify-between gap-2 font-mono text-xs md:flex-col md:justify-start md:text-[13px]'>
        <span className='inline-flex items-center gap-2 text-ink'>
          {current && (
            <span aria-hidden='true' className='size-1.5 bg-accent' />
          )}
          {period}
        </span>
        <span className='text-muted'>{location}</span>
      </div>

      <div className='flex min-w-0 flex-[999_1_560px] flex-col gap-3'>
        <div className='flex flex-col gap-1 md:flex-row md:flex-wrap md:items-baseline md:gap-x-4'>
          <h3 className='text-title font-semibold'>{company}</h3>
          <span className='text-[15px] text-body md:text-base'>
            {role}
            {level && ` · ${level}`}
          </span>
        </div>
        <p className='max-w-[720px] text-[15px] leading-relaxed text-body md:text-base'>
          {description}
        </p>
        <ul className='flex flex-wrap gap-2 pt-1 font-mono text-xs text-body'>
          {tags.map((tag) => (
            <li key={tag} className='border border-hairline px-2.5 py-1'>
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
