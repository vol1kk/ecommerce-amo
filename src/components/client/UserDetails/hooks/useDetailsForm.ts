"use client";

import { useFormState } from "react-dom";
import { useEffect, useState } from "react";

import getZodErrors, { ZodErrorType } from "@/utils/getZodErrors";
import { updateUserAction } from "@/components/client/UserDetails";

type UpdateFailed = {
  statusCode: number;
  message: string;
  errors: ZodErrorType[];
};

export function useDetailsForm<T extends Record<string, any>>(
  initialData: T,
  id: string,
) {
  const [state, setState] = useState(initialData);
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] = useState<Record<keyof T, string> | null>(null);

  const [formState, formAction] = useFormState<
    T | UpdateFailed | null,
    FormData
  >(updateUserAction.bind(undefined, id), null);

  useEffect(() => {
    if (!isEditing) setError(null);
  }, [isEditing]);

  useEffect(() => {
    if (!formState) return;

    // Handling if error comes from Nest.js api
    if ("statusCode" in formState && formState.statusCode === 400) {
      const errors = getZodErrors(formState?.errors) || {};
      setError(errors as Record<keyof T, string> | null);
    } else if ("id" in formState) {
      // Updating state only with values, which where initially passed
      // since patch returns whole user, rather than only updated fields
      const updatedFields = {} as Record<any, any>;

      for (const key in initialData) {
        const typedKey = key as keyof typeof initialData;

        const existingField = formState[typedKey];
        if (existingField) updatedFields[typedKey] = existingField;
      }

      setState(updatedFields);
      setIsEditing(false);
    }
  }, [formState]);

  return { state, error, isEditing, setIsEditing, formAction };
}
