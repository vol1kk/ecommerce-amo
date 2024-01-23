"use server";

import { cookies } from "next/headers";

export default async function setCookiesAction(biscuits: string[]) {
  biscuits.forEach(cookie => {
    const [rawCookie, ...options] = cookie.split(";");

    const optionsObject = options.reduce(
      (obj, entry) => {
        const trimmed = entry.trim();
        const [name, value] = trimmed.split("=");

        const parsedName = name.slice(0, 1).toLowerCase() + name.slice(1);

        if (value) {
          obj[parsedName] = value;
        } else {
          obj[parsedName] = true;
        }

        return obj;
      },
      {} as Record<string, any>,
    );

    const [name, value] = rawCookie.split("=");

    // console.log(name, value, optionsObject);
    cookies().set(name, value, optionsObject);
  });
}
