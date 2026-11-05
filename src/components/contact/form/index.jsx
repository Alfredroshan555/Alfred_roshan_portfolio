import React from "react";
import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Field = ({ label, error, children, full }) => (
  <label className={`field ${full ? "full" : ""}`}>
    <span className="label">{label}</span>
    {children}
    {error && <span className="error">{error}</span>}
  </label>
);

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) =>
    send("service_z3f7myd", "template_op1437r", data, "MEiNQawFFbesm3s_l")
      .then(() => {
        toast.success("Thanks! Your message is on its way.");
        reset();
      })
      .catch((err) => {
        toast.error("Couldn't send the message. Please email me directly.");
        console.log("Failed!", err);
      });

  const theme =
    document.documentElement.getAttribute("data-theme") === "light"
      ? "light"
      : "dark";

  return (
    <div className="contact-form-wrap">
      <ToastContainer position="bottom-right" theme={theme} />
      <form className="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <Field label="Name" error={errors.form_name?.message}>
          <input
            type="text"
            autoComplete="name"
            {...register("form_name", { required: "Name is required" })}
          />
        </Field>
        <Field label="Email" error={errors.reply_to?.message}>
          <input
            type="email"
            autoComplete="email"
            {...register("reply_to", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Enter a valid email",
              },
            })}
          />
        </Field>
        <Field label="Phone" error={errors.phone_number?.message}>
          <input
            type="tel"
            autoComplete="tel"
            {...register("phone_number", {
              required: "Phone number is required",
              minLength: { value: 8, message: "Enter a valid phone number" },
            })}
          />
        </Field>
        <Field label="Subject" error={errors.subject?.message}>
          <input
            type="text"
            {...register("subject", {
              required: "Subject is required",
              minLength: { value: 8, message: "At least 8 characters" },
            })}
          />
        </Field>
        <Field label="Message" error={errors.message?.message} full>
          <textarea
            rows={5}
            {...register("message", {
              required: "Message is required",
              minLength: { value: 20, message: "At least 20 characters" },
              maxLength: { value: 500, message: "500 characters max" },
            })}
          />
        </Field>
        <button
          type="submit"
          className="btn btn-primary"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending…" : "Send message"}
        </button>
      </form>
    </div>
  );
};

export default Form;
