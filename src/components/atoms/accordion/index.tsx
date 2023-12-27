'use client';

import { Accordion, AccordionItem } from '@nextui-org/react';

interface IProps {
  title: string;
  items: string[];
}

export default function AccordionComponent(data: IProps) {
  return (
    <Accordion isCompact>
      <AccordionItem title={data.title}>
        {data.items?.map((item) => (
          <h1>{item}</h1>
        ))}
      </AccordionItem>
    </Accordion>
  );
}