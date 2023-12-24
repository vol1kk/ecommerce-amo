"use client";

import { signOut } from "next-auth/react";

export default function SidebarLogout() {
  return (
    <button type="button" onClick={() => signOut()}>
      Sign Out
    </button>
  );
}
