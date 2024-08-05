"use client";
import { useFormState } from "react-dom";

import { deleteExperience } from "@/app/lib/actions";

export function DeleteExperience({ id }: { id: number }) {
  const [error, action, isPending] = useFormState(deleteExperience, null);

  return (
    <form action={action} className="float-right justify-end">
      <button
        className="m-2 p-0 text-s text-neutral-300 bg-transparent hover:text-red-500"
        disabled={isPending}
        name="id"
        type="submit"
        value={id}
      >
        -
      </button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
