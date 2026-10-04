"use client";

import { useState } from "react";
import emailjs from "emailjs-com";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import WorkButton from "@/components/animata/work-whatsapp-button";
import { EnquiryStepContent } from "@/components/contact/EnquiryStepContent";
import {
  buildEnquiryMessage,
  ENQUIRY_STEP_COUNT,
  ENQUIRY_STEPS,
  initialEnquiryFormData,
  type EnquiryErrors,
  type EnquiryFormData,
  type SpecimenKey,
} from "@/components/contact/enquiry-data";
import { validateEnquiryForm, validateEnquiryStep } from "@/components/contact/enquiry-validation";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmitted: () => void;
};

export function TransportEnquiryDialog({ open, onOpenChange, onSubmitted }: Props) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<EnquiryFormData>(initialEnquiryFormData);
  const [errors, setErrors] = useState<EnquiryErrors>({});
  const [isSending, setIsSending] = useState(false);

  const stepMeta = ENQUIRY_STEPS[step - 1];
  const progress = Math.round((step / ENQUIRY_STEP_COUNT) * 100);

  const resetWizard = () => {
    setStep(1);
    setErrors({});
  };

  const handleOpenChange = (next: boolean) => {
    if (!next) resetWizard();
    onOpenChange(next);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name as keyof EnquiryErrors]) {
      setErrors({ ...errors, [name]: undefined });
    }
  };

  const handleSpecimenChange = (key: SpecimenKey, checked: boolean) => {
    setFormData({
      ...formData,
      specimens: { ...formData.specimens, [key]: checked },
    });
    if (errors.specimens) setErrors({ ...errors, specimens: undefined });
  };

  const handlePatch = (patch: Partial<EnquiryFormData>) => {
    setFormData({ ...formData, ...patch });
  };

  const clearError = (key: keyof EnquiryErrors) => {
    if (errors[key]) setErrors({ ...errors, [key]: undefined });
  };

  const goNext = () => {
    const stepErrors = validateEnquiryStep(step, formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});
    setStep((s) => Math.min(s + 1, ENQUIRY_STEP_COUNT));
  };

  const goBack = () => {
    setErrors({});
    setStep((s) => Math.max(s - 1, 1));
  };

  const submitEnquiry = () => {
    const allErrors = validateEnquiryForm(formData);
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      const firstInvalidStep = [1, 2, 3, 4, 5, 6, 7].find(
        (s) => Object.keys(validateEnquiryStep(s, formData)).length > 0
      );
      if (firstInvalidStep) setStep(firstInvalidStep);
      return;
    }

    setIsSending(true);
    const message = buildEnquiryMessage(formData);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: formData.fullName,
          from_email: formData.email,
          phone: formData.phone,
          country: formData.countryOfResidence,
          message,
          reply_to: formData.email,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""
      )
      .then(
        () => {
          setIsSending(false);
          setFormData(initialEnquiryFormData);
          resetWizard();
          onOpenChange(false);
          onSubmitted();
        },
        () => {
          alert("Failed to send enquiry. Please try again later.");
          setIsSending(false);
        }
      );
  };

  const handleWhatsApp = () => {
    const allErrors = validateEnquiryForm(formData);
    if (Object.keys(allErrors).length > 0) {
      setErrors(allErrors);
      const firstInvalidStep = [1, 2, 3, 4, 5, 6, 7].find(
        (s) => Object.keys(validateEnquiryStep(s, formData)).length > 0
      );
      if (firstInvalidStep) setStep(firstInvalidStep);
      return;
    }

    const whatsappNumber = "60122196896";
    const encodedMessage = encodeURIComponent(buildEnquiryMessage(formData));
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, "_blank");
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent className="max-w-xl max-h-[90vh] flex flex-col gap-0 p-0 overflow-hidden sm:rounded-xl">
        <DialogHeader className="px-6 pt-6 pb-4 border-b border-border/60 space-y-3">
          <div className="flex items-center justify-between gap-4 pr-8">
            <p className="font-inter text-xs font-medium text-primary uppercase tracking-wide">
              Step {step} of {ENQUIRY_STEP_COUNT}
            </p>
            <span className="font-inter text-xs text-muted-foreground">{progress}%</span>
          </div>
          <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <DialogTitle className="font-poppins text-xl text-left">{stepMeta.title}</DialogTitle>
          <DialogDescription className="font-inter text-left">{stepMeta.hint}</DialogDescription>
        </DialogHeader>

        <div className="flex-1 overflow-y-auto px-6 py-5 min-h-0">
          <EnquiryStepContent
            step={step}
            formData={formData}
            errors={errors}
            onChange={handleChange}
            onSpecimenChange={handleSpecimenChange}
            onPatch={handlePatch}
            onClearError={clearError}
          />
        </div>

        <div className="px-6 py-4 border-t border-border/60 bg-muted/20 flex flex-col gap-3">
          {step < ENQUIRY_STEP_COUNT ? (
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={goBack}
                disabled={step === 1}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back
              </Button>
              <Button type="button" variant="hero" className="flex-1" onClick={goNext}>
                Continue
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                type="button"
                variant="outline"
                className="sm:w-auto"
                onClick={goBack}
              >
                <ChevronLeft className="w-4 h-4 mr-1" />
                Back
              </Button>
              <Button
                type="button"
                variant="hero"
                className="flex-1"
                disabled={isSending}
                onClick={submitEnquiry}
              >
                {isSending ? "Sending..." : "Submit enquiry"}
              </Button>
              <WorkButton type="button" className="flex-1" onClick={handleWhatsApp} />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
