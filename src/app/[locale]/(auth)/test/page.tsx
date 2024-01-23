"use client";
import Button from "@/components/common/Button";

export default function Page() {
  return (
    <Button
      onClick={() =>
        fetch("http://localhost:3001/token/refresh", {
          credentials: "include",
          method: "POST",
        })
          .then(r => r.json())
          .then(console.log)
      }
    >
      Click me
    </Button>
  );
}
