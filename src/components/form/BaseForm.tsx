"use client";

import type React from "react";
import { useState } from "react";
import { fieldConfigs, formFields } from "@/lib/constants/form";
import type { FormData, FormField } from "@/lib/types/form";
import SubmitSuccess from "./SubmitSuccess";

type BaseFormProps = {
  errors?: Record<FormField, string>;
  submitHandler?: (data: FormData) => void;
};

const BaseForm: React.FC<BaseFormProps> = ({ errors, submitHandler }) => {
  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    inquiry: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name as FormField]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", form);
    if (submitHandler) {
      try {
        submitHandler(form);
        setSubmitted(true);
      } catch (error) {
        console.error(error);
      }
      return;
    }
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      {Object.keys(formFields).map((key) => {
        const field = key as FormField;
        const config = fieldConfigs[field];
        const id = `form-${field}`;
        return (
          <div key={field}>
            <label htmlFor={id}>{config.label}</label>
            {config.type === "textarea" ? (
              <textarea
                id={id}
                name={formFields[field]}
                value={form[field]}
                onChange={handleChange}
                required
              />
            ) : (
              <input
                id={id}
                type={config.type}
                name={formFields[field]}
                value={form[field]}
                onChange={handleChange}
                required
              />
            )}
            {errors?.[field] && (
              <p className="mt-1 text-sm text-red-600" id={`${id}-error`}>
                {errors[field]}
              </p>
            )}
          </div>
        );
      })}
      <button type="submit">送信</button>
      {submitted && <SubmitSuccess />}
    </form>
  );
};

export default BaseForm;
