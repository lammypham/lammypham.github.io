"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
// import "./EmailForm.css";

// Components
import Section from "../Section";

const SERVICE_ID: string = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string;
const TEMPLATE_ID: string = process.env
  .NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string;
const PUBLIC_KEY: string = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string;

// TODO: update the env to build time for production
const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    emailjs
      .sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current as HTMLFormElement,
        PUBLIC_KEY,
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent!");
        },
        (error) => {
          console.log(error.text);
          console.log("error sending message, try again!");
        },
      );
  };

  return (
    <Section sectionClass="h-screen">
      <form
        ref={formRef}
        className="m-auto flex w-full flex-col"
        onSubmit={handleSubmit}
      >
        <div className="w-full sm:flex sm:justify-between">
          <div className="flex w-full flex-col pb-10 sm:w-1/2">
            <label>Your Name</label>
            <input
              name="from_name"
              className="rounded border-2 border-black p-2"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="ml-2 flex w-full flex-col pb-10 sm:w-1/2">
            <label className="ml-2">Your Email</label>
            <input
              name="reply_to"
              className="ml-2 rounded border-2 border-black p-2"
              placeholder="Enter your email address"
              required
            />
          </div>
        </div>

        <div className="flex w-full flex-col pb-10 ">
          <label>Your Message</label>
          <textarea
            name="message"
            className="h-20 rounded border-2 border-black p-3"
            placeholder="Enter your message"
            required
          />
        </div>
        <div className="m-auto">
          <button
            className="h-auto rounded border-2 border-black p-2"
            type="submit"
          >
            CONNECT WITH ME
          </button>
        </div>
      </form>
    </Section>
  );
};

export default Contact;
