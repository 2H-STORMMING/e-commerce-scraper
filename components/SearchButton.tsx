"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

function SearchButton() {
  const { pending } = useFormStatus();
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white
    font-bold py-4 px-4 rounded-full disabled:opacity-50 
    disables:cursor-not-allowed"
    >
      {pending && "Searching..."}
      {!pending && <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />}
    </button>
  );
}

export default SearchButton;
