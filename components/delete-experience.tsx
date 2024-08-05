"use client";
import { Button } from "@nextui-org/button";
import { useFormState } from "react-dom";

import { deleteExperience } from "@/app/lib/actions";

export function DeleteExperience({ id }: { id: number }) {
  const [error, action, isPending] = useFormState(deleteExperience, null);

  return (
    <form action={action}>
      <Button
        className="text-xs text-secondary"
        disabled={isPending}
        name="id"
        type="submit"
        value={id}
      >
        Delete
      </Button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
