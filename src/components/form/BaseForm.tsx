"use client";

import type React from "react";
import { useState } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { fieldConfigs, formFields } from "@/lib/constants/form";
import type { InquiryFormField, InquiryFormValues } from "@/lib/types/form";
import SubmitFail from "./SubmitFail";
import SubmitSuccess from "./SubmitSuccess";

type BaseFormProps = {
  headerText?: string;
  submitHandler?: (data: InquiryFormValues) => Promise<void> | void;
};

const BaseForm: React.FC<BaseFormProps> = ({ headerText, submitHandler }) => {
  const [submitError, setSubmitError] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<InquiryFormValues>({
    defaultValues: {
      name: "",
      email: "",
      inquiry: "",
    },
  });

  const onSubmit: SubmitHandler<InquiryFormValues> = async (data) => {
    setSubmitError(false);
    if (submitHandler) {
      try {
        await submitHandler(data);
      } catch (error) {
        setSubmitError(true);
        console.error(error);
        return;
      }
    }
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-md mx-auto bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md space-y-6"
    >
      {headerText && (
        <p className="text-gray-800 dark:text-gray-200 text-lg font-semibold mb-4">
          {headerText}
        </p>
      )}
      {Object.keys(formFields).map((key) => {
        const field = key as InquiryFormField;
        const config = fieldConfigs[field];
        const id = `form-${field}`;
        return (
          <div key={field} className="space-y-2">
            <label
              htmlFor={id}
              className="block text-gray-700 dark:text-gray-200 font-semibold mb-1"
            >
              {config.label}
            </label>
            {config.type === "textarea" ? (
              <textarea
                id={id}
                {...register(field, { required: `${config.label}は必須です` })}
                className="block w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition"
                rows={5}
              />
            ) : (
              <input
                id={id}
                type={config.type}
                {...register(field, { required: `${config.label}は必須です` })}
                className="block w-full border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 transition"
              />
            )}
            {errors[field] && (
              <p
                className="text-sm text-red-600 dark:text-red-400 mt-1"
                id={`${id}-error`}
              >
                {errors[field]?.message as string}
              </p>
            )}
          </div>
        );
      })}
      <button
        type="submit"
        className="w-full py-3 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600 text-white dark:text-gray-100 font-bold rounded-lg shadow transition mt-6"
      >
        送信
      </button>
      {!submitError && isSubmitSuccessful && <SubmitSuccess />}
      {submitError && <SubmitFail />}
    </form>
  );
};

export default BaseForm;
