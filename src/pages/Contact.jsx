import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase.js";
import "./Contact.css";

const initialForm = { name: "", email: "", message: "" };

function Contact() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      await addDoc(collection(db, "messages"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setStatus("success");
      setForm(initialForm);
    } catch (err) {
      console.error("Error sending message:", err);
      setStatus("error");
    }
  }

  return (
    <div className="container section contact-page">
      <p className="eyebrow">get in touch</p>
      <h1>Let's work together.</h1>
      <p className="contact-intro">
        Have a project in mind, a question about my work, or just want to
        connect? Send me a message and I'll get back to you.
      </p>

      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="contact-field">
            <span>Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Jane Doe"
            />
          </label>

          <label className="contact-field">
            <span>Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="jane@example.com"
            />
          </label>

          <label className="contact-field">
            <span>Message</span>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows={6}
              placeholder="Tell me a bit about what you're working on..."
            />
          </label>

          <button
            type="submit"
            className="btn btn-primary"
            disabled={status === "sending"}
          >
            {status === "sending" ? "Sending…" : "Send message →"}
          </button>

          {status === "success" && (
            <p className="contact-success" role="status">
              Thanks — your message has been received. I'll get back to you
              soon!
            </p>
          )}

          {status === "error" && (
            <p className="contact-error" role="status">
              Something went wrong sending your message. Please try again.
            </p>
          )}
        </form>

        <aside className="contact-side">
          <h2>Other ways to reach me</h2>
          <ul className="contact-links">
            <li>
              <span className="contact-links-label">Email</span>
              <a href="mailto:you@example.com">you@example.com</a>
            </li>
            <li>
              <span className="contact-links-label">GitHub</span>
              <a
                href="https://github.com/your-username"
                target="_blank"
                rel="noreferrer"
              >
                github.com/your-username
              </a>
            </li>
            <li>
              <span className="contact-links-label">LinkedIn</span>
              <a
                href="https://linkedin.com/in/your-username"
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/your-username
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
}

export default Contact;
