"use client";

import { useActionState } from "react";
import { useFormStatus, useFormState } from "react-dom";

interface Props {
  handleSubmit: (
    prevData: any,
    formData: FormData
  ) => Promise<
    | {
        error: {
          message?: string[] | undefined;
          email?: string[] | undefined;
          subject?: string[] | undefined;
        };
        message: string;
      }
    | {
        message: string;
        error?: undefined;
      }
  >;
}

export default function UserForm({ handleSubmit }: Props) {
  const [state, formAction] = useFormState(handleSubmit, null);
  const { pending } = useFormStatus();

  return (
    <>
      <form
        className="w-full h-full  flex flex-col text-zinc-800 p-2 bg-white rounded-md gap-3"
        action={formAction}
      >
        <div className="sm:col-span-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            email
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <input
                type="text"
                name="email"
                id="email"
                autoComplete="email"
                className="p-2 w-full block  border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="email을 입력해 주세요."
              />
            </div>
          </div>
        </div>
        {state?.error?.email && (
          <p className=" text-red-400">{state?.error.email} 😭</p>
        )}
        <div className="sm:col-span-4">
          <label
            htmlFor="subject"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            subject
          </label>
          <div className="mt-2">
            <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600">
              <input
                type="text"
                name="subject"
                id="subject"
                autoComplete="subject"
                className="p-2 w-full block  border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                placeholder="subject를 입력해 주세요."
              />
            </div>
          </div>
        </div>
        {state?.error?.subject && (
          <p className=" text-red-400">{state?.error.subject} 😭</p>
        )}
        <label htmlFor="message">message</label>
        <textarea
          id="message"
          name="message"
          className="resize-none h-56 text-black flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 p-2"
        />
        {state?.error?.message && (
          <p className=" text-red-400">{state?.error.message} 😭</p>
        )}
        <button
          type="submit"
          disabled={pending}
          className={`w-full bg-slate-300 h-10 rounded-md hover:bg-slate-500 text-gray-300 ${
            pending ? "bg-slate-100" : "bg-slate-700"
          }`}
        >
          submit
        </button>
      </form>
    </>
  );
}
