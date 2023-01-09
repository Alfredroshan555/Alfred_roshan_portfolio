import React from "react";
import "./style.scss";

import { send } from "emailjs-com";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    send("service_z3f7myd", "template_op1437r", data, "MEiNQawFFbesm3s_l")
      .then((res) => {
        console.log("Success!", res.status, res.text);
        formSuccess();
      })
      .catch((err) => {
        console.log("Failed!", err);
      });
  };

  const formSuccess = () => {
    toast("Thanks for submitting!!");
    document.getElementById("queryForm").reset();
  };

  return (
    <div className="query_form">
      <ToastContainer />
      <form id="queryForm" onSubmit={handleSubmit(onSubmit)}>
        <div className="input_field">
          <input
            type="text"
            name="form_name"
            placeholder="Enter Name"
            {...register("form_name", {
              required: "Name is required!",
            })}
          />
          {errors.form_name?.message && (
            <p className="error">{errors.form_name?.message}</p>
          )}
        </div>
        <div className="input_field">
          <input
            type="text"
            name="reply_to"
            placeholder="Email"
            {...register("reply_to", {
              required: "Email is required!",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email format ",
              },
            })}
          />
          {errors.reply_to?.message && (
            <p className="error">{errors.reply_to?.message}</p>
          )}
        </div>
        <div className="input_field">
          <input
            type="text"
            name="phone_number"
            placeholder="PhoneNumber"
            {...register("phone_number", {
              required: "Phone number is required!",
              minLength: {
                value: 8,
                message: "Phone number not valid.",
              },
            })}
          />
          {errors.phone_number?.message && (
            <p className="error">{errors.phone_number?.message}</p>
          )}
        </div>
        <div className="input_field">
          <input
            type="text"
            name="subject"
            placeholder="Enter your Query!! Here !!"
            {...register("subject", {
              required: "Subject is required!",
              minLength: {
                value: 8,
                message: "minimum 10 characters required",
              },
            })}
          />
          {errors.subject?.message && (
            <p className="error">{errors.subject?.message}</p>
          )}
        </div>
        <div className="input_field full-width">
          <textarea
            className="textarea"
            name="message"
            placeholder="Your message"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 20,
                message: "Minimum 20 characters required",
              },
              maxLength: {
                value: 500,
                message: "Maximum 500 characters allowed",
              },
            })}
          />
          {errors.message?.message && (
            <p className="error">{errors.message?.message}</p>
          )}
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
