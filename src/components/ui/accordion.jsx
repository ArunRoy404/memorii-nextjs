"use client"

import * as React from "react"
import * as AccordionPrimitive from "@radix-ui/react-accordion"
import { ChevronDownIcon, Minus, Plus } from "lucide-react"
import { cn } from "@/lib/utils"

function Accordion(props) {
  return <AccordionPrimitive.Root data-slot="accordion" {...props} />
}

function AccordionItem({ className, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn(
        "border border-[rgba(75,85,99,0.25)] px-10 py-9 rounded-2xl",
        "data-[state=open]:shadow-[0_24.556px_32.742px_-14.734px_rgba(149,149,149,0.25)]",

        /* responsive only for md and below */
        "md:px-6 md:py-6 px-4 py-5",

        className
      )}
      {...props}
    />
  )
}

function AccordionTrigger({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex w-full">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-start gap-4 rounded-md text-left text-sm font-medium transition-all outline-none focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50",
          "group hover:underline-0 gap-14 cursor-pointer text-primary-foreground text-lg font-semibold",

          /* responsive only */
          "gap-8 md:text-base text-sm",

          className
        )}
        {...props}
      >
        <div className="relative">
          <Plus
            className="
              absolute accordion-icon1 text-black pointer-events-none lg:size-6 translate-y-0.5 transition-transform duration-200
              md:size-5 size-4
            "
          />
          <Minus
            className="
              absolute accordion-icon2 text-primary pointer-events-none lg:size-6 translate-y-0.5 transition-transform duration-200
              md:size-5 size-4
            "
          />
        </div>

        {children}
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down overflow-hidden text-sm"
      {...props}
    >
      <div
        className={cn(
          "text-faq-color text-sm pt-7 flex gap-14",

          /* responsive */
          "md:pt-5 md:gap-8 md:text-[13px] pt-4 gap-4 text-[12px]",

          className
        )}
      >
        <div className="hidden md:block"></div>

        {children}
      </div>
    </AccordionPrimitive.Content>
  )
}

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
