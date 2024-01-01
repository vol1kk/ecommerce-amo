import Button from "@/components/common/Button";
import { ReactNode, MouseEvent } from "react";
import { DetailsFormHandlers } from "@/components/UserDetails/components/common/DetailsFormHandlers";

type DetailsFormProps = {
  children: ReactNode;
  isEditable: boolean;
  action: (data: FormData) => Promise<void>;
  discardHandler: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function DetailsForm({
  action,
  children,
  isEditable,
  discardHandler,
}: DetailsFormProps) {
  return (
    <form action={action}>
      {children}
      <DetailsFormHandlers
        isEditable={isEditable}
        discardHandler={discardHandler}
      />
    </form>
  );
}
