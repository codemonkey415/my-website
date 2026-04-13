"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Send } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/0 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Get In Touch
        </h2>
      </div>
      <div className="flex flex-col gap-4 lg:px-6 mb-8">
        <h2 className="lg:block hidden text-5xl font-bold lg:text-start">
          Get In Touch
        </h2>
        <p className="lg:text-lg lg:text-start text-muted-foreground">
          If you&#39;re considering my contribution, have a question, or just
          want to say hi, you can count on hearing back from me!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:px-6">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          name="email"
          placeholder="Contact Method (Email, Telegram, etc.)"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <textarea
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full rounded-sm border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
        <Button
          type="submit"
          disabled={status === "sending" || status === "sent"}
          className="w-full flex items-center justify-center gap-2"
        >
          <Send className="h-4 w-4" />
          {status === "sending" ? "Sending..." : status === "sent" ? "Sent!" : "Send Message"}
        </Button>
        {status === "error" && (
          <p className="text-sm text-red-500 text-center">Something went wrong. Please try again.</p>
        )}
        {status === "sent" && (
          <p className="text-sm text-green-500 text-center">Message sent successfully!</p>
        )}
      </form>
    </section>
  );
}
