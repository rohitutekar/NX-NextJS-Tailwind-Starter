import { useRef } from 'react';

import clsx from 'clsx';

import IconChevron from '../../../assets/icons/chevron';

export interface AccordionItemProps {
  handleToggle?: () => void;
  isOpen?: boolean;
  heading: string;
  content: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  handleToggle,
  isOpen,
  heading,
  content,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="">
      <button
        className={clsx(
          'flex items-center justify-between w-full p-5 font-medium border border-gray-200 hover:bg-brand hover:text-white',
          isOpen ? 'bg-brand border-brand text-white' : 'text-gray-500',
        )}
        aria-expanded="true"
        onClick={handleToggle}
      >
        <span>{heading}</span>
        <IconChevron className={clsx('w-6 h-6 shrink-0 transition-all', isOpen && 'rotate-180')} />
      </button>
      <div
        className="overflow-hidden transition-all"
        ref={contentRef}
        style={{ height: isOpen ? contentRef?.current?.scrollHeight : 0 }}
      >
        <div className="p-5 border" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  );
};
