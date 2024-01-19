"use client";

import { User } from "next-auth";
import { useAction } from "@/hooks/useAction";
import { updateUserAction } from "@/components/client/UserDetails";

export function useUpdateUser<E extends string>(id: string) {
  return useAction<User, E>(updateUserAction.bind(undefined, id));
}
