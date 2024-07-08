"use client";

import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

const Subjects = [
  "Custom Landscapes and Wildlife",
  "Puppy Project",
  "General Inquiries",
];

interface FormData {
  name: string;
  subject: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [state, handleSubmit] = useForm("contactForm");
  const [success, setSuccess] = useState(false);
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
      setSuccess(true);
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

  const handleSubjectButtonClick = (selectedSubject: string) => {
    setFormData((prevData) => ({
      ...prevData,
      subject: selectedSubject,
    }));
  };

  return (
    <div className="flex items-center justify-center rounded-2xl bg-timber/50 py-8 shadow-neo dark:bg-smoke/75 dark:shadow-neodark md:h-[32rem] md:min-w-[42rem]">
      <div
        className={`${
          success ? "block" : "hidden"
        } flex h-full w-full flex-col items-center justify-center gap-4`}
      >
        <h2 className={`text-md px-4 text-center md:text-lg`}>
          Thanks for hitting submit, we&apos;re excited to chat with you soon!
        </h2>
        <p className="px-10 text-center text-xs opacity-80 md:text-sm">
          Please expect to hear back from us in the next two business days.
        </p>
      </div>
      <div
        className={`${
          success ? "hidden" : "block"
        } flex flex-col items-center gap-4 md:gap-6`}
      >
        <h2 className="text-xl md:text-2xl">Let&apos;s have a chat!</h2>
        <form
          onSubmit={onSubmit}
          className={`flex flex-col items-center gap-2 px-2 text-sm md:gap-6 md:px-4 md:text-base`}
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name or Company"
              value={formData.name}
              onChange={handleChange}
              className={`w-full rounded-xl bg-white px-4 py-2 dark:bg-black md:w-[20rem] ${
                emptyFields.includes("name")
                  ? "border-[1px] border-crimson"
                  : ""
              }`}
            />
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full rounded-xl bg-white px-4 py-2 dark:bg-black md:w-[20rem] ${
                emptyFields.includes("email")
                  ? "border-[1px] border-crimson"
                  : ""
              }`}
            />
          </div>
          <div className="flex flex-wrap justify-center gap-1 px-2 [&_*]:transition-all [&_*]:ease-linear">
            {Subjects.map((subject) => (
              <button
                key={subject}
                type="button"
                onClick={() => handleSubjectButtonClick(subject)}
                className={`w-auto rounded-xl px-3 py-2 text-xs md:px-4 md:py-2 md:text-base ${
                  formData.subject === subject
                    ? " scale-[1.02] bg-white shadow-neo dark:bg-black dark:shadow-neodark"
                    : "neo bg-timber dark:bg-smoke"
                } ${
                  emptyFields.includes("email")
                    ? "border-[1px] border-crimson"
                    : ""
                }`}
              >
                {subject}
              </button>
            ))}
          </div>
          <ValidationError prefix="Email" field="email" errors={state.errors} />
          <textarea
            id="message"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className={`min-h-[10rem] w-full rounded-xl bg-white dark:bg-black md:min-w-[48rem] md:px-4 md:py-2 ${
              emptyFields.includes("message")
                ? "border-[1px] border-crimson"
                : ""
            }`}
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            type="submit"
            disabled={state.submitting}
            className="neo rounded-xl border-[1px] border-black/50 bg-white px-4 py-2 text-base dark:bg-black md:text-xl"
          >
            {state.submitting ? "Submitting..." : "Submit 🥂"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
