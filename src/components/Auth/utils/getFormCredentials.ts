export function getFormCredentials(form: HTMLFormElement) {
  const formData = new FormData(form);

  return { email: formData.get("email"), password: formData.get("password") };
}
