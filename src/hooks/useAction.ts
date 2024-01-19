"use client";

import { useFormState } from "react-dom";
import { useEffect, useState } from "react";

import getErrors from "@/utils/getErrors";
import { ZodErrorType } from "@/utils/getZodErrors";

export type UpdateFailed = {
  message: string;
  statusCode: number;
  errors: ZodErrorType[];
};
type ActionType = (state: any, payload: FormData) => any;

export function useAction<T extends object, E extends string>(
  action: ActionType,
) {
  const [isOpen, setIsOpen] = useState(false);
  const [errors, setErrors] = useState<Record<E, string> | null>(null);
  const [formState, formAction] = useFormState<T | UpdateFailed, FormData>(
    action,
    {} as Awaited<T>,
  );

  useEffect(() => {
    if (!isOpen) setErrors(null);
  }, [isOpen]);

  useEffect(() => {
    if (!formState) return;
    if (!("errors" in formState)) setIsOpen(false);
    if ("errors" in formState) setErrors(getErrors(formState));
  }, [formState]);

  return {
    modal: [isOpen, setIsOpen],
    form: [errors, formAction],
  } as const;
}
