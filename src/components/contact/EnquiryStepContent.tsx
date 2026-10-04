"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import {
  FormField,
  SpecimenCheckbox,
  InlineRadioGroup,
  fieldInputClass,
} from "@/components/contact/enquiry-form-ui";
import type { EnquiryErrors, EnquiryFormData, SpecimenKey } from "@/components/contact/enquiry-data";

type Props = {
  step: number;
  formData: EnquiryFormData;
  errors: EnquiryErrors;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSpecimenChange: (key: SpecimenKey, checked: boolean) => void;
  onPatch: (patch: Partial<EnquiryFormData>) => void;
  onClearError: (key: keyof EnquiryErrors) => void;
};

export function EnquiryStepContent({
  step,
  formData,
  errors,
  onChange,
  onSpecimenChange,
  onPatch,
  onClearError,
}: Props) {
  const err = (key: keyof EnquiryErrors) => errors[key];

  switch (step) {
    case 1:
      return (
        <div className="grid sm:grid-cols-2 gap-4">
          <FormField label="Full name" htmlFor="fullName" required error={err("fullName")}>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={onChange}
              className={fieldInputClass(!!errors.fullName)}
              placeholder="Your full name"
            />
          </FormField>
          <FormField label="Email address" htmlFor="email" required error={err("email")}>
            <Input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={onChange}
              className={fieldInputClass(!!errors.email)}
              placeholder="your@email.com"
            />
          </FormField>
          <FormField label="WhatsApp / mobile" htmlFor="phone" required error={err("phone")}>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={onChange}
              className={fieldInputClass(!!errors.phone)}
              placeholder="+60 12-345 6789"
            />
          </FormField>
          <FormField
            label="Country of residence"
            htmlFor="countryOfResidence"
            required
            error={err("countryOfResidence")}
          >
            <Input
              id="countryOfResidence"
              name="countryOfResidence"
              value={formData.countryOfResidence}
              onChange={onChange}
              className={fieldInputClass(!!errors.countryOfResidence)}
              placeholder="e.g. Malaysia"
            />
          </FormField>
        </div>
      );

    case 2:
      return (
        <div className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-2">
            {(
              [
                ["embryos", "Embryos"],
                ["oocytes", "Oocytes (eggs)"],
                ["sperm", "Sperm"],
                ["other", "Other reproductive specimens"],
              ] as const
            ).map(([key, label]) => (
              <SpecimenCheckbox
                key={key}
                id={`specimen-${key}`}
                label={label}
                checked={formData.specimens[key]}
                onCheckedChange={(checked) => onSpecimenChange(key, checked)}
              />
            ))}
          </div>
          {err("specimens") ? <p className="text-red-500 text-xs">{err("specimens")}</p> : null}
          {formData.specimens.other ? (
            <FormField
              label="Describe other specimen"
              htmlFor="specimenOtherDescription"
              required
              error={err("specimenOtherDescription")}
            >
              <Input
                id="specimenOtherDescription"
                name="specimenOtherDescription"
                value={formData.specimenOtherDescription}
                onChange={onChange}
                className={fieldInputClass(!!errors.specimenOtherDescription)}
                placeholder="Type of specimen"
              />
            </FormField>
          ) : null}
          <FormField
            label="Approximate quantity"
            htmlFor="approximateQuantity"
            required
            error={err("approximateQuantity")}
          >
            <Input
              id="approximateQuantity"
              name="approximateQuantity"
              value={formData.approximateQuantity}
              onChange={onChange}
              className={fieldInputClass(!!errors.approximateQuantity)}
              placeholder="e.g. 4 embryos or 2 straws"
            />
          </FormField>
        </div>
      );

    case 3:
      return (
        <div className="space-y-4">
          <FormField
            label="Clinic / laboratory name"
            htmlFor="originatingClinicName"
            required
            error={err("originatingClinicName")}
          >
            <Input
              id="originatingClinicName"
              name="originatingClinicName"
              value={formData.originatingClinicName}
              onChange={onChange}
              className={fieldInputClass(!!errors.originatingClinicName)}
              placeholder="Sending clinic"
            />
          </FormField>
          <FormField
            label="City & country"
            htmlFor="originatingCityCountry"
            required
            error={err("originatingCityCountry")}
          >
            <Input
              id="originatingCityCountry"
              name="originatingCityCountry"
              value={formData.originatingCityCountry}
              onChange={onChange}
              className={fieldInputClass(!!errors.originatingCityCountry)}
              placeholder="e.g. Kuala Lumpur, Malaysia"
            />
          </FormField>
          <FormField
            label="Release authorised by clinic?"
            required
            error={err("originatingReleaseConfirmed")}
          >
            <InlineRadioGroup
              namePrefix="release"
              value={formData.originatingReleaseConfirmed}
              onValueChange={(value) => {
                onPatch({ originatingReleaseConfirmed: value });
                onClearError("originatingReleaseConfirmed");
              }}
              options={["Yes", "No", "Not yet confirmed"]}
            />
          </FormField>
        </div>
      );

    case 4:
      return (
        <div className="space-y-4">
          <FormField
            label="Clinic / laboratory name"
            htmlFor="receivingClinicName"
            required
            error={err("receivingClinicName")}
          >
            <Input
              id="receivingClinicName"
              name="receivingClinicName"
              value={formData.receivingClinicName}
              onChange={onChange}
              className={fieldInputClass(!!errors.receivingClinicName)}
              placeholder="Receiving clinic"
            />
          </FormField>
          <FormField
            label="City & country"
            htmlFor="receivingCityCountry"
            required
            error={err("receivingCityCountry")}
          >
            <Input
              id="receivingCityCountry"
              name="receivingCityCountry"
              value={formData.receivingCityCountry}
              onChange={onChange}
              className={fieldInputClass(!!errors.receivingCityCountry)}
              placeholder="e.g. Sydney, Australia"
            />
          </FormField>
          <FormField label="Doctor / coordinator" htmlFor="receivingCoordinatorName">
            <Input
              id="receivingCoordinatorName"
              name="receivingCoordinatorName"
              value={formData.receivingCoordinatorName}
              onChange={onChange}
              placeholder="Optional"
            />
          </FormField>
        </div>
      );

    case 5:
      return (
        <div className="space-y-4">
          <FormField
            label="Preferred month / date"
            htmlFor="preferredTiming"
            required
            error={err("preferredTiming")}
          >
            <Input
              id="preferredTiming"
              name="preferredTiming"
              value={formData.preferredTiming}
              onChange={onChange}
              className={fieldInputClass(!!errors.preferredTiming)}
              placeholder="e.g. March 2026"
            />
          </FormField>
          <FormField label="Urgency" required error={err("transferUrgency")}>
            <InlineRadioGroup
              namePrefix="urgency"
              value={formData.transferUrgency}
              onValueChange={(value) => {
                onPatch({ transferUrgency: value });
                onClearError("transferUrgency");
              }}
              options={["Urgent", "Planned"]}
            />
          </FormField>
          <FormField label="Permits & approvals (if any)">
            <Textarea
              name="approvalsStatus"
              value={formData.approvalsStatus}
              onChange={onChange}
              className="min-h-[72px] resize-y"
              placeholder="Any release, import, or export approvals already obtained"
            />
          </FormField>
        </div>
      );

    case 6:
      return (
        <div className="space-y-4">
          {err("verification") ? (
            <p className="text-red-500 text-xs">{err("verification")}</p>
          ) : null}
          <FormField label="Receiving clinic acceptance">
            <Textarea
              name="receivingConfirmation"
              value={formData.receivingConfirmation}
              onChange={onChange}
              className="min-h-[80px] resize-y text-sm"
              placeholder="Appointment or acceptance details"
            />
          </FormField>
          <FormField label="Originating clinic release confirmation">
            <Textarea
              name="originatingReleaseConfirmation"
              value={formData.originatingReleaseConfirmation}
              onChange={onChange}
              className="min-h-[80px] resize-y text-sm"
              placeholder="Ready-for-release confirmation"
            />
          </FormField>
          <FormField label="Coordinator / doctor contact">
            <Textarea
              name="coordinatorContact"
              value={formData.coordinatorContact}
              onChange={onChange}
              className="min-h-[80px] resize-y text-sm"
              placeholder="Name, role, email or phone"
            />
          </FormField>
          <FormField label="Import / export permit">
            <Textarea
              name="importExportPermit"
              value={formData.importExportPermit}
              onChange={onChange}
              className="min-h-[80px] resize-y text-sm"
              placeholder="Permit reference or status"
            />
          </FormField>
        </div>
      );

    case 7:
      return (
        <div className="space-y-4">
          <p className="font-inter text-xs text-muted-foreground leading-relaxed rounded-lg border border-border/80 bg-muted/30 p-3">
            ARK Global provides international cryogenic transportation for cryopreserved human
            reproductive specimens. Arrangements depend on clinic verification, regulatory
            requirements, and valid permits.
          </p>
          <label
            htmlFor="anti-scam"
            className={cn(
              "flex items-start gap-3 rounded-lg border p-3 cursor-pointer transition-colors",
              formData.antiScamConfirmed
                ? "border-primary/40 bg-primary/[0.04]"
                : "border-border bg-background hover:bg-muted/30"
            )}
          >
            <Checkbox
              id="anti-scam"
              checked={formData.antiScamConfirmed}
              onCheckedChange={(checked) => {
                onPatch({ antiScamConfirmed: checked === true });
                onClearError("antiScamConfirmed");
              }}
              className="mt-0.5"
            />
            <span className="font-inter text-sm leading-snug text-foreground">
              I confirm this is a genuine medical/IVF transportation request and understand ARK
              Global may verify both fertility centres before quoting.{" "}
              <span className="text-red-500">*</span>
            </span>
          </label>
          {err("antiScamConfirmed") ? (
            <p className="text-red-500 text-xs">{err("antiScamConfirmed")}</p>
          ) : null}
          <p className="font-inter text-xs text-muted-foreground text-center pt-1">
            By submitting, you agree to our Terms & Conditions and Privacy Policy.
          </p>
        </div>
      );

    default:
      return null;
  }
}
