import Button from "@/components/common/Button";
import { ReactNode, MouseEvent } from "react";

type DetailsFormProps = {
  children: ReactNode;
  action: (data: FormData) => Promise<void>;
  discardHandler: (e: MouseEvent<HTMLButtonElement>) => void;
};

export default function DetailsForm({
  action,
  children,
  discardHandler,
}: DetailsFormProps) {
  return (
    <form action={action}>
      {children}
      <div className="grid grid-cols-1 gap-2 font-semibold">
        <Button isSubmit>Save</Button>
        <Button onClick={discardHandler}>Discard</Button>
      </div>
    </form>
  );
}
