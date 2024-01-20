"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

interface FormData {
  name: string;
  subject: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");
  const [formData, setFormData] = React.useState<FormData>({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
  const [emptyFields, setEmptyFields] = React.useState<string[]>([]);

  const isFormValid = () => {
    const emptyFieldsList = Object.keys(formData).filter(
      (key) => formData[key as keyof FormData].trim() === ""
    );
    setEmptyFields(emptyFieldsList);
    return emptyFieldsList.length === 0;
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormValid()) {
      await handleSubmit(e);
      setFormData({
        name: "",
        subject: "",
        email: "",
        message: "",
      });
    } else {
      console.log("Please fill in all required fields");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    setEmptyFields((prevEmptyFields) =>
      prevEmptyFields.filter((field) => field !== name)
    );
  };

  return (
    <div className="flex flex-col px-10 gap-10">
      <h2 className="text-2xl">Let&apos;s chat!</h2>
      <form
        onSubmit={onSubmit}
        className="flex flex-col items-start gap-4"
      >
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-auto rounded-xl px-4 py-2 ${
            emptyFields.includes("name") ? "border-[1px] border-crimson" : ""
          }`}
        />
        <input
          type="text"
          id="subject"
          name="subject"
          placeholder="subject"
          value={formData.subject}
          onChange={handleChange}
          className={`w-auto rounded-xl px-4 py-2 ${
            emptyFields.includes("subject") ? "border-[1px] border-crimson" : ""
          }`}
        />
        <input
          id="email"
          type="email"
          name="email"
          placeholder="your email"
          value={formData.email}
          onChange={handleChange}
          className={`w-auto rounded-xl px-4 py-2 ${
            emptyFields.includes("email") ? "border-[1px] border-crimson" : ""
          }`}
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          placeholder="message"
          value={formData.message}
          onChange={handleChange}
          className={`min-w-[44vw] rounded-xl px-4 py-2 ${
            emptyFields.includes("message") ? "border-[1px] border-crimson" : ""
          }`}
        />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <button
          type="submit"
          disabled={state.submitting}
          className="rounded-xl bg-ash/25 px-4 py-2 text-xl neo"
        >
          {state.submitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
