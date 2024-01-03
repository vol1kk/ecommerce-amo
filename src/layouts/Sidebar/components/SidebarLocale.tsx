"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/utils/intlHooks";

export default function SidebarLocale() {
  const path = usePathname();
  const router = useRouter();

  const locale = useLocale();

  return (
    <label>
      <select
        defaultValue={locale.toLowerCase()}
        name="locale"
        id="locale"
        onChange={e => router.replace(path, { locale: e.target.value })}
      >
        <option value="en">EN</option>
        <option value="ua">UA</option>
      </select>
    </label>
  );
}
