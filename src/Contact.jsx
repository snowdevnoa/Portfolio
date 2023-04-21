import { useState } from 'react';
import Container from './Container';

/* Controlled components for best practice, which means that the form inputs are tied to state values and updates to the form are handled through a function that updates the state. */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    completed: false,
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch('https://formspree.io/f/xgebydyj', {
      method: 'POST',
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (response.ok) {
      setFormData((prevState) => ({ ...prevState, completed: true }));
    }
  }

  return (
    <Container>
      <div
        id="contact"
        className="min-h-screen flex justify-center items-center flex-wrap animate-hide"
      >
        <div className="flex flex-col items-center justify-center md:w-1/2">
          <h1 className="text-[3rem]">LET'S CONNECT!</h1>
          <p className="mt-[2rem]">I'm a people person, not a predator :)</p>
        </div>
        {formData.completed ? (
          <div className="md:w-1/2 text-center w-[500px] p-[2.5rem] mt-[-11rem] md:mt-0 md:w-1/2">
            <h1 className="text-[2rem] leading-[1]">
              Thank you for connecting with me, talk to you soon!
            </h1>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-[500px] p-[2.5rem] mt-[-11rem] md:mt-0 md:w-1/2"
          >
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              onChange={handleChange}
              name="name"
              value={formData.name}
            />
            <label htmlFor="email" className="mt-3">
              Email:
            </label>
            <input
              type="email"
              onChange={handleChange}
              name="email"
              value={formData.email}
            />
            <label htmlFor="message" className="mt-3">
              Message:
            </label>
            <textarea
              onChange={handleChange}
              name="message"
              value={formData.message}
              placeholder="How may I be of assistance?"
            />
            <button type="submit">Send Message</button>
          </form>
        )}
      </div>
    </Container>
  );
}
