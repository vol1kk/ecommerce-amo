"use server";

import { cookies } from "next/headers";

export default async function removeCookieAction(...biscuits: string[]) {
  biscuits.forEach(cookie => {
    cookies().delete(cookie);
  });
}
