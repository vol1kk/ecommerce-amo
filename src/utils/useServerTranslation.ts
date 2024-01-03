"use server";

import { useTranslations } from "next-intl";

export default function useServerTranslation(str: string) {
  return useTranslations(str);
}
