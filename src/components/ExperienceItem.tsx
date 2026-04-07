interface ExperienceItemProps {
  role: string;
  level?: string;
  company: string;
  companyColor: string;
  dotColor: string;
  period: string;
  description: string;
}

export default function ExperienceItem({
  role,
  level,
  company,
  companyColor,
  dotColor,
  period,
  description,
}: ExperienceItemProps) {
  return (
    <div className='relative pl-8 md:pl-12 group'>
      <div
        className='absolute w-3 h-3 bg-[#0A0A0A] border-2 rounded-full -left-[6.5px] top-2 transition-all duration-300 group-hover:scale-150 group-hover:border-[#E63946]'
        style={{ borderColor: dotColor }}
      />
      <div className='flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-3'>
        <h3 className='text-2xl font-medium tracking-tight text-[#EDEDED]'>
          {role}{' '}
          {level && (
            <span className='text-[#888888] font-light text-xl'>({level})</span>
          )}
        </h3>
        <span className='text-base text-[#888888] font-light md:ml-auto'>
          {period}
        </span>
      </div>
      <h4 className='text-lg mb-4' style={{ color: companyColor }}>
        {company}
      </h4>
      <p className='text-lg text-[#888888] font-light leading-relaxed'>
        {description}
      </p>
    </div>
  );
}
