import type { LucideIcon } from 'lucide-react';

interface TechItem {
  name: string;
  primary?: boolean;
}

interface TechCategoryProps {
  title: string;
  icon: LucideIcon;
  items: TechItem[];
}

export default function TechCategory({
  title,
  icon: Icon,
  items,
}: TechCategoryProps) {
  return (
    <div>
      <h3 className='text-base text-[#888888] font-medium tracking-wide uppercase mb-6 flex items-center gap-2'>
        <Icon strokeWidth={1.5} className='w-4 h-4' /> {title}
      </h3>
      <div className='flex flex-wrap gap-3'>
        {items.map((item) => (
          <span
            key={item.name}
            className={
              item.primary
                ? 'px-4 py-2 rounded-full bg-[#161616] border border-white/5 text-[#EDEDED] text-base hover:border-[#E63946]/50 hover:bg-[#E63946]/5 hover:text-[#E63946] transition-all duration-300 cursor-default'
                : 'px-4 py-2 rounded-full bg-[#161616] border border-white/5 text-[#888888] text-base cursor-default'
            }
          >
            {item.name}
          </span>
        ))}
      </div>
    </div>
  );
}
