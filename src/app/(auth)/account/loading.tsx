import { SpinnerIcon } from "@/components/common/Icons";

export default function Loading() {
  return (
    <main className="grid flex-1 place-content-center">
      <SpinnerIcon
        width={120}
        className="animate-spin fill-purple-500 text-purple-700"
      />
    </main>
  );
}
