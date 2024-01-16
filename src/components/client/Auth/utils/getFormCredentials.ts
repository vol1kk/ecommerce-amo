import getFormDataStr from "@/components/client/UserDetails/utils/getFormDataStr";

export function getFormCredentials(form: HTMLFormElement) {
  const formData = new FormData(form);

  return {
    email: getFormDataStr(formData, "email"),
    password: getFormDataStr(formData, "password"),
  };
}
