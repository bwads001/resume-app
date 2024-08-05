"use client";

import { Button } from "@nextui-org/button";
import { useFormState } from "react-dom";

import { createExperience } from "@/app/lib/actions";

export async function AddExperience() {
  const [error, action, isPending] = useFormState(createExperience, null);

  return (
    <div className="flex flex-col bg-content3 p-4 basis-2/5 rounded-lg h-1/3">
      <form action={action}>
        <label className="my-1 block text-sm font-medium" htmlFor="position">
          Position
        </label>
        <input
          required
          className="rounded w-full p-1"
          id="position"
          name="position"
          placeholder=""
        />
        <label className="my-1 block text-sm font-medium" htmlFor="company">
          Company
        </label>
        <input
          required
          className="rounded w-full p-1"
          id="company"
          name="company"
          placeholder=""
        />
        <label className="my-1 block text-sm font-medium" htmlFor="startDate">
          Start Date
        </label>
        <input
          required
          className="rounded w-full p-1"
          id="startDate"
          name="startDate"
          placeholder="Mo/Year"
        />
        <label className="my-1 block text-sm font-medium" htmlFor="endDate">
          End Date
        </label>
        <input
          required
          className="rounded w-full p-1"
          id="endDate"
          name="endDate"
          placeholder="Mo/Year"
        />
        <label className="my-1 block text-sm font-medium" htmlFor="experience">
          Experience
        </label>
        <textarea
          required
          className="rounded w-full p-1"
          id="experience"
          name="experience"
          placeholder="Experience"
        />
        {error && <p className="text-red-500">{error}</p>}

        <Button
          className="bg-primary hover:bg-primary-300 disabled:opacity-50 float-right"
          disabled={isPending}
          type="submit"
        >
          Add
        </Button>
      </form>
    </div>
  );
}
