import { useState } from 'react';

import { AccordionItemProps, AccordionProps } from '../../types/accordion';
import { AccordionItem } from './parts/item';

export const Accordion: React.FC<AccordionProps> = ({
  items,
  onSelect = null,
  alwaysOpen = false,
  defaultActiveKey = '',
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div>
      {items?.map((item: AccordionItemProps, index: number) => (
        <AccordionItem
          key={index}
          isOpen={index === activeIndex}
          handleToggle={() => setActiveIndex(index === activeIndex ? null : index)}
          {...item}
        />
      ))}
    </div>
  );
};
