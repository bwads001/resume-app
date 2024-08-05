import { Button } from "@nextui-org/button";

import { deleteExperience } from "@/app/lib/actions";

export function DeleteExperience(id: any) {
  return (
    <Button
      className="text-xs text-secondary"
      type="submit"
      onClick={async () => {
        "use server";
        await deleteExperience(id);
      }}
    >
      Delete
    </Button>
  );
}
