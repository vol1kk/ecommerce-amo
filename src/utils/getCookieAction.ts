"use server";

import { cookies } from "next/headers";

export default async function getCookieAction(key?: string) {
  if (!key) return cookies();

  return cookies().get(key);
}
