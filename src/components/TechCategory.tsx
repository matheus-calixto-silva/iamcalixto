interface TechCategoryProps {
  slug: string;
  items: string[];
}

export default function TechCategory({ slug, items }: TechCategoryProps) {
  return (
    <div className='flex flex-col gap-4 border-r border-b border-hairline px-4 py-5 md:gap-6 md:p-8'>
      <div className='flex justify-between font-mono text-xs text-muted'>
        <h3 className='font-normal'>/{slug}</h3>
        <span aria-hidden='true' className='max-md:hidden'>
          {String(items.length).padStart(2, '0')}
        </span>
      </div>
      <ul className='flex flex-col gap-2 text-[15px] font-medium md:gap-2.5 md:text-[17px]'>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
