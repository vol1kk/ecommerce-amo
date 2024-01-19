"use client";

import { User } from "next-auth";
import { useFormState } from "react-dom";
import { useEffect, useState } from "react";

import getErrors from "@/utils/getErrors";
import { ZodErrorType } from "@/utils/getZodErrors";
import { updateUserAction } from "@/components/client/UserDetails";

type UpdateFailed = {
  message: string;
  statusCode: number;
  errors: ZodErrorType[];
};

export function useUpdateUser<T extends string>(id: string) {
  const [isOpen, setIsOpen] = useState(false);
  const [formState, formAction] = useFormState<User | UpdateFailed, FormData>(
    updateUserAction.bind(undefined, id),
    {} as User,
  );

  useEffect(() => {
    if (!formState) return;
    if (!("errors" in formState)) setIsOpen(false);
  }, [formState]);

  const formErrors = getErrors<T>(formState);

  return {
    modal: [isOpen, setIsOpen],
    form: [formErrors, formAction],
  } as const;
}
