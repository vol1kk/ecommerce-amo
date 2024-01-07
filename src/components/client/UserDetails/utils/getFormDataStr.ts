export default function getFormDataStr(formData: FormData, field: string) {
  if (!formData.has(field)) {
    throw new Error("Form doesn't have this field.");
  }

  const fieldRaw = formData.get(field);
  return typeof fieldRaw === "string" ? fieldRaw : "";
}
