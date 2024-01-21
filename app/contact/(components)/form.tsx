"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

const Subjects = [
  "Custom Landscapes and Wildlife",
  "Puppy Project",
  "App & Web Development",
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

  const handleSubjectButtonClick = (selectedSubject: string) => {
    setFormData((prevData) => ({
      ...prevData,
      subject: selectedSubject,
    }));
  };

  return (
    <div className="flex flex-col items-center gap-6 rounded-2xl bg-timber/50 dark:bg-smoke/75 p-16 shadow-neo dark:shadow-neodark md:min-w-[42rem]">
      <h2 className="text-2xl">Let&apos;s have a chat!</h2>
      <form onSubmit={onSubmit} className="flex flex-col items-center gap-6">
        <div className="flex justify-between gap-4">
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Name or Company"
            value={formData.name}
            onChange={handleChange}
            className={`w-[20rem] bg-white dark:bg-black rounded-xl px-4 py-2 ${
              emptyFields.includes("name") ? "border-[1px] border-crimson" : ""
            }`}
          />
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={`w-[20rem] bg-white dark:bg-black rounded-xl px-4 py-2 ${
              emptyFields.includes("email") ? "border-[1px] border-crimson" : ""
            }`}
          />
        </div>
        <div className="flex justify-between gap-4 [&_*]:transition-all [&_*]:ease-linear">
          {Subjects.map((subject) => (
            <button
              key={subject}
              type="button"
              onClick={() => handleSubjectButtonClick(subject)}
              className={`w-auto rounded-xl px-4 py-2 ${
                formData.subject === subject ? "bg-white dark:bg-black border-[1px] border-black/50 shadow-neo dark:shadow-neodark scale-[1.02]" : "neo bg-timber dark:bg-smoke"
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
          className={`min-w-[48rem] min-h-[10rem] bg-white dark:bg-black rounded-xl px-4 py-2 ${
            emptyFields.includes("message") ? "border-[1px] border-crimson" : ""
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
          className="neo rounded-xl bg-white dark:bg-black border-[1px] border-black/50 px-4 py-2 text-xl"
        >
          {state.submitting ? "Submitting..." : "Submit 🥂"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
