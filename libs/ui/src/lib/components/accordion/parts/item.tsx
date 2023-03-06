import { useRef } from 'react';

import { cx } from 'class-variance-authority';

import IconChevron from '../../../../assets/icons/chevron';
import { AccordionItemProps } from '../../../types/accordion';
import { Button } from '../../button/button';

export const AccordionItem: React.FC<AccordionItemProps> = ({
  handleToggle,
  isOpen,
  heading,
  content,
}) => {
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="mb-1">
      <Button
        aria-expanded="true"
        onClick={handleToggle}
        size="lg"
        rounded={false}
        fullWidth={true}
      >
        <span className="flex-1 text-left">{heading}</span>
        <IconChevron className={cx(['w-6 h-6 transition-all', isOpen ? 'rotate-180' : ''])} />
      </Button>
      <div
        className="overflow-hidden transition-all"
        ref={contentRef}
        style={{ height: isOpen ? contentRef?.current?.scrollHeight : 0 }}
      >
        <div className="p-5 border border-brand">{content}</div>
      </div>
    </div>
  );
};
