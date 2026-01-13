"use client";

import type React from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { fieldConfigs, formFields } from "@/lib/constants/form";
import type { FormData, FormField } from "@/lib/types/form";
import SubmitSuccess from "./SubmitSuccess";

type BaseFormProps = {
  submitHandler?: (data: FormData) => void;
};

const BaseForm: React.FC<BaseFormProps> = ({ submitHandler }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      email: "",
      inquiry: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    if (submitHandler) {
      try {
        submitHandler(data);
      } catch (error) {
        console.error(error);
      }
    }
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
                {...register(field, { required: `${config.label}は必須です` })}
                className="block w-full border rounded p-2"
              />
            ) : (
              <input
                id={id}
                type={config.type}
                {...register(field, { required: `${config.label}は必須です` })}
                className="block w-full border rounded p-2"
              />
            )}
            {errors[field] && (
              <p className="mt-1 text-sm text-red-600" id={`${id}-error`}>
                {errors[field]?.message as string}
              </p>
            )}
          </div>
        );
      })}
      <button
        type="submit"
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
      >
        送信
      </button>
      {isSubmitSuccessful && <SubmitSuccess />}
    </form>
  );
};

export default BaseForm;
