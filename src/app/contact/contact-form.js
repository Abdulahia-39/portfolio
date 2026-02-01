"use client";

import { useFormStatus } from "react-dom";
import { useActionState } from "react";
import { sendContactEmail } from "./actions";

const initialState = { ok: null, message: "" };

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="w-full md:w-auto px-6 py-3 rounded-xl bg-zinc-900 dark:bg-zinc-100 text-white dark:text-black font-semibold hover:scale-[1.01] active:scale-[0.99] transition-transform disabled:opacity-60 disabled:cursor-not-allowed"
    >
      {pending ? "Sending..." : "Send message"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(sendContactEmail, initialState);

  return (
    <form className="space-y-4" action={formAction}>
      <div>
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-900/70 px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
          Email
        </label>
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-900/70 px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
          Project type
        </label>
        <select
          name="projectType"
          className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-900/70 px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue=""
        >
          <option value="" disabled>
            Select an option
          </option>
          <option>Web app</option>
          <option>Mobile app</option>
          <option>Design system</option>
          <option>Consultation</option>
          <option>Other</option>
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
          Message
        </label>
        <textarea
          name="message"
          rows={5}
          placeholder="Tell me about the problem you're solving..."
          className="w-full rounded-xl border border-black/10 dark:border-white/10 bg-white/80 dark:bg-zinc-900/70 px-4 py-3 text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>

      {state?.message ? (
        <p
          className={`text-sm font-medium ${
            state.ok ? "text-emerald-600" : "text-red-600"
          }`}
          role="status"
          aria-live="polite"
        >
          {state.message}
        </p>
      ) : null}

      <SubmitButton />
    </form>
  );
}
