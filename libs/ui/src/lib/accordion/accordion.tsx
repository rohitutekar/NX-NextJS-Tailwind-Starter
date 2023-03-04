import { useState } from 'react';

import { AccordionItem, AccordionItemProps } from './parts/item';

export interface AccordionProps {
  items: Array<AccordionItemProps>;
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
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
