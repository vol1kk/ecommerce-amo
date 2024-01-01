"use client";

import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { updateUserAction } from "@/components/client/UserDetails";
import {
  UpdateResponse,
  UpdateResponseError,
} from "@/app/api/v1/user/update/route";

const initialErrors = {
  fullName: "",
  email: "",
  phone: "",
  password: {
    old: "",
    new: "",
  },
} satisfies UpdateResponseError["error"];

export function useDetailsForm<T>(initialData: T) {
  const { update } = useSession();
  const [formState, formAction] = useFormState<UpdateResponse | null, FormData>(
    updateUserAction,
    null,
  );
  const [isEditing, setIsEditing] = useState(false);
  const [error, setError] =
    useState<UpdateResponseError["error"]>(initialErrors);

  const [state, setState] = useState(initialData);

  useEffect(() => {
    if (!isEditing) {
      setError(initialErrors);
    }
  }, [isEditing]);

  useEffect(() => {
    if (formState?.success) {
      const formStateValues = Object.values(formState.data);
      if (formStateValues.length === 1) {
        setState(formStateValues[0] as any);
      } else {
        setState(formState.data);
      }

      update(formState.data);
      setIsEditing(false);
    } else {
      setError(formState?.error || initialErrors);
    }
  }, [formState]);

  return { state, error, isEditing, setIsEditing, formAction };
}
