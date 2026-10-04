"use client";

import * as React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";

export function EnquirySection({
  step,
  title,
  hint,
  required,
  children,
  className,
}: {
  step: number;
  title: string;
  hint?: string;
  required?: boolean;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-xl border border-border/70 bg-muted/20 p-5 sm:p-6 space-y-4",
        className
      )}
    >
      <div className="flex items-start gap-3">
        <span
          aria-hidden
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-semibold font-poppins ring-1 ring-primary/20"
        >
          {step}
        </span>
        <div className="min-w-0 flex-1 space-y-1">
          <h3 className="font-poppins font-semibold text-[15px] sm:text-base text-foreground leading-snug">
            {title}
            {required ? <span className="text-primary font-normal"> — required</span> : null}
          </h3>
          {hint ? (
            <p className="font-inter text-xs text-muted-foreground leading-relaxed">{hint}</p>
          ) : null}
        </div>
      </div>
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function FormField({
  label,
  htmlFor,
  required,
  error,
  children,
  className,
}: {
  label: string;
  htmlFor?: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("space-y-1.5", className)}>
      <Label htmlFor={htmlFor} className="font-inter text-sm font-medium text-foreground">
        {label}
        {required ? <span className="text-red-500 ml-0.5">*</span> : null}
      </Label>
      {children}
      {error ? <p className="text-red-500 text-xs">{error}</p> : null}
    </div>
  );
}

export function fieldInputClass(hasError?: boolean) {
  return cn(hasError && "border-red-500 focus-visible:ring-red-500");
}

export function SpecimenCheckbox({
  id,
  label,
  checked,
  onCheckedChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}) {
  return (
    <label
      htmlFor={id}
      className={cn(
        "flex items-center gap-3 rounded-lg border px-3 py-2.5 cursor-pointer transition-colors",
        checked
          ? "border-primary bg-primary/5 shadow-sm"
          : "border-border bg-background hover:bg-muted/40"
      )}
    >
      <Checkbox id={id} checked={checked} onCheckedChange={(v) => onCheckedChange(v === true)} />
      <span className="font-inter text-sm leading-snug text-foreground">{label}</span>
    </label>
  );
}

export function InlineRadioGroup({
  value,
  onValueChange,
  options,
  namePrefix,
  error,
}: {
  value: string;
  onValueChange: (value: string) => void;
  options: string[];
  namePrefix: string;
  error?: string;
}) {
  return (
    <div className="space-y-1.5">
      <RadioGroup
        value={value}
        onValueChange={onValueChange}
        className="flex flex-wrap gap-2"
      >
        {options.map((option) => {
          const id = `${namePrefix}-${option.replace(/\s+/g, "-").toLowerCase()}`;
          const selected = value === option;
          return (
            <div key={option}>
              <RadioGroupItem value={option} id={id} className="peer sr-only" />
              <Label
                htmlFor={id}
                className={cn(
                  "inline-flex items-center rounded-full border px-3.5 py-1.5 text-sm font-inter cursor-pointer transition-colors",
                  selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground hover:bg-muted/50"
                )}
              >
                {option}
              </Label>
            </div>
          );
        })}
      </RadioGroup>
      {error ? <p className="text-red-500 text-xs">{error}</p> : null}
    </div>
  );
}
