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

export function useDetailsForm<T>(initialData: T, id: string) {
  const { update } = useSession();

  // <UpdateResponse | null, FormData>
  const [formState, formAction] = useFormState(
    updateUserAction.bind(undefined, id),
    null,
  );
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
    if (formState) {
      const updatedData = {} as { [K in keyof T]: T[K] };

      for (const key in initialData) {
        updatedData[key] = formState[key];
      }

      setState(updatedData);
      update();
      setIsEditing(false);
    } else {
      setError(formState?.error || initialErrors);
    }
  }, [formState]);

  return { state, error, isEditing, setIsEditing, formAction };
}
