import React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

function ContactForm({ title, color, heading }) {
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>

      <div className="mb-4">
      <h2 className="text-lg mb-2 text-blue-600 pt-4">
            leave us a message
        </h2>
        <form className="flex flex-column gap-4">
          <input type="text" placeholder="Name" className="p-2 border" />
          <input type="tel" placeholder="Phone" className="p-2 border" />
          <input type="email" placeholder="Email" className="p-2 border" />
          <input
            type="email"
            placeholder="How did you find us?"
            className="p-2 border"
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Message"
            className="p-2 border"
          ></textarea>
          <button className="bg-blue-600 text-white p-2">Send Enquiry</button>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
