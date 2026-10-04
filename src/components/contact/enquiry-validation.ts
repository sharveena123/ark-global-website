import {
  type EnquiryErrors,
  type EnquiryFormData,
  ENQUIRY_STEP_COUNT,
  selectedSpecimenLabels,
} from "@/components/contact/enquiry-data";

export function validateEnquiryStep(step: number, formData: EnquiryFormData): EnquiryErrors {
  const newErrors: EnquiryErrors = {};

  switch (step) {
    case 1:
      if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
      if (!formData.email.trim()) newErrors.email = "Email is required.";
      if (!formData.phone.trim()) newErrors.phone = "WhatsApp/mobile number is required.";
      if (!formData.countryOfResidence.trim())
        newErrors.countryOfResidence = "Country of residence is required.";
      break;
    case 2:
      if (!selectedSpecimenLabels(formData).length)
        newErrors.specimens = "Please select at least one specimen type.";
      if (formData.specimens.other && !formData.specimenOtherDescription.trim())
        newErrors.specimenOtherDescription = "Please describe the other specimen type.";
      if (!formData.approximateQuantity.trim())
        newErrors.approximateQuantity = "Approximate quantity is required.";
      break;
    case 3:
      if (!formData.originatingClinicName.trim())
        newErrors.originatingClinicName = "Originating clinic/laboratory name is required.";
      if (!formData.originatingCityCountry.trim())
        newErrors.originatingCityCountry = "Originating city & country is required.";
      if (!formData.originatingReleaseConfirmed)
        newErrors.originatingReleaseConfirmed = "Please indicate release/authorisation status.";
      break;
    case 4:
      if (!formData.receivingClinicName.trim())
        newErrors.receivingClinicName = "Receiving clinic/laboratory name is required.";
      if (!formData.receivingCityCountry.trim())
        newErrors.receivingCityCountry = "Receiving city & country is required.";
      break;
    case 5:
      if (!formData.preferredTiming.trim())
        newErrors.preferredTiming = "Preferred month/date is required.";
      if (!formData.transferUrgency)
        newErrors.transferUrgency = "Please indicate if the transfer is urgent or planned.";
      break;
    case 6: {
      const hasVerification =
        formData.receivingConfirmation.trim() ||
        formData.originatingReleaseConfirmation.trim() ||
        formData.coordinatorContact.trim() ||
        formData.importExportPermit.trim();
      if (!hasVerification) {
        newErrors.verification =
          "Please provide at least one item: receiving confirmation, originating release confirmation, coordinator contact, or permit details.";
      }
      break;
    }
    case 7:
      if (!formData.antiScamConfirmed)
        newErrors.antiScamConfirmed = "You must confirm this declaration to submit.";
      break;
    default:
      break;
  }

  return newErrors;
}

export function validateEnquiryForm(formData: EnquiryFormData): EnquiryErrors {
  let merged: EnquiryErrors = {};
  for (let step = 1; step <= ENQUIRY_STEP_COUNT; step++) {
    merged = { ...merged, ...validateEnquiryStep(step, formData) };
  }
  return merged;
}
