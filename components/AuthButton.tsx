import React from "react";
import { useFormStatus } from "react-dom";

const AuthButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      disabled={pending}
      type="submit"
      className={`${
        pending ? "bg-gray-600" : "bg-blue-600" 
      } rounded-md w-full px-12 py-3 text-sm font-medium text-white hover:bg-blue-700`}
    >
      {pending ? "Loading..." : "Sign In"}
    </button>
  );
};

export default AuthButton;