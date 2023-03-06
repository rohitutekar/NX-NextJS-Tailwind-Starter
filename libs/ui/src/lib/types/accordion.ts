export interface AccordionItemProps {
  heading: React.ReactNode;
  content: React.ReactNode;
  isOpen?: boolean;
  handleToggle?: () => void;
}

export interface AccordionProps {
  items: Array<AccordionItemProps>;
  onSelect?: () => void | null;
  alwaysOpen?: boolean;
  defaultActiveKey?: string | string[] | null;
}
