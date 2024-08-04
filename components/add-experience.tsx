"use client";

import { Button } from "@nextui-org/button";
import { useFormState } from "react-dom";

import { createExperience } from "@/app/lib/actions";

export function AddExperience({}) {
  const [error, action, isPending] = useFormState(createExperience, null);

  return (
    <form action={action}>
      <label className="mb-2 block text-sm font-medium" htmlFor="position">
        Position
      </label>
      <input
        required
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-default-500 focus:ring-default-500 sm:text-sm"
        id="position"
        name="position"
        placeholder="Position"
      />
      <label className="mb-2 block text-sm font-medium" htmlFor="company">
        Company
      </label>
      <input
        required
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-default-500 focus:ring-default-500 sm:text-sm"
        id="company"
        name="company"
        placeholder="Company"
      />
      <label className="mb-2 block text-sm font-medium" htmlFor="startDate">
        Start Date
      </label>
      <input
        required
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-default-500 focus:ring-default-500 sm:text-sm"
        id="startDate"
        name="startDate"
        placeholder="Start Date"
      />
      <label className="mb-2 block text-sm font-medium" htmlFor="endDate">
        End Date
      </label>
      <input
        required
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-default-500 focus:ring-default-500 sm:text-sm"
        id="endDate"
        name="endDate"
        placeholder="End Date"
      />
      <label className="mb-2 block text-sm font-medium" htmlFor="experience">
        Experience
      </label>
      <textarea
        required
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-default-500 focus:ring-default-500 sm:text-sm"
        id="experience"
        name="experience"
        placeholder="Experience"
      />
      {error && <p className="text-red-500">{error}</p>}

      <Button disabled={isPending} type="submit">
        Add
      </Button>
    </form>
  );
}
