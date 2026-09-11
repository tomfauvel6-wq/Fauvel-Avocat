"use client";

import { useState } from "react";

type Item = {
  title: string;
  text: string;
};

export default function InterventionAccordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState(0);

  return (
    <div className="grid gap-4">
      {items.map((item, index) => {
        const isOpen = open === index;

        return (
          <button
            key={item.title}
            type="button"
            onClick={() => setOpen(isOpen ? -1 : index)}
            className="group border border-navy/10 bg-white/35 p-6 text-left transition hover:border-gold/60 hover:bg-white/60"
          >
            <div className="flex items-center justify-between gap-6">
              <h3 className="font-serif text-2xl text-navy">{item.title}</h3>
              <span className="text-xl text-gold transition group-hover:translate-x-1">
                {isOpen ? "−" : "+"}
              </span>
            </div>

            {isOpen && (
              <p className="mt-5 max-w-2xl text-sm leading-7 text-navy/68">
                {item.text}
              </p>
            )}
          </button>
        );
      })}
    </div>
  );
}
