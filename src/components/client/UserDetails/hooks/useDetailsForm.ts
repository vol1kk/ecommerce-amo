"use client";

import { useFormState } from "react-dom";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";

import { updateUserAction } from "@/components/client/UserDetails";

const initialErrors = {
  fullName: "",
  email: "",
  phone: "",
  password: {
    old: "",
    new: "",
  },
}; // satisfies UpdateResponseError["error"];

// TODO: Response types

export function useDetailsForm<T>(initialData: T) {
  const { update } = useSession();

  // <UpdateResponse | null, FormData>
  const [formState, formAction] = useFormState(updateUserAction, null);
  const [isEditing, setIsEditing] = useState(false);

  // <UpdateResponseError["error"]>
  const [error, setError] = useState(initialErrors);

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

      update();
      setIsEditing(false);
    } else {
      setError(formState?.error || initialErrors);
    }
  }, [formState]);

  return { state, error, isEditing, setIsEditing, formAction };
}
