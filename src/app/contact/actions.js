"use server";

import { Resend } from "resend";

export async function sendContactEmail(prevState, formData) {
  const name = formData.get("name")?.toString().trim() ?? "";
  const email = formData.get("email")?.toString().trim() ?? "";
  const projectType = formData.get("projectType")?.toString().trim() ?? "";
  const message = formData.get("message")?.toString().trim() ?? "";

  if (!name || !email || !message) {
    return { ok: false, message: "Please fill in name, email, and message." };
  }

  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_TO) {
    return { ok: false, message: "Email service is not configured." };
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_TO,
      reply_to: email,
      subject: `New contact: ${name} (${projectType || "General"})`,
      text: `Name: ${name}\nEmail: ${email}\nProject: ${projectType}\n\n${message}`,
    });

    return { ok: true, message: "Thanks! Your message has been sent." };
  } catch (error) {
    return { ok: false, message: "Something went wrong. Please try again." };
  }
}
