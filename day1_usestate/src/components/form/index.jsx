import React, { useState } from "react";

function getInitialState() {
  return {
    name: "Navin",
    email: "navin@gmail.com",
  };
}

const Form = () => {
  //   const [name, setName] = useState("Navin");
  //   const [email, setEmail] = useState("navin@gmail.com");
  // console.log("component rendering");

  const [form, setForm] = useState({
    name: "Navin",
    email: "navin@gmail.com",
  });
  // you can pass initial state directly or call a function to create one
  // const [form, setForm] = useState(() => getInitialState());

  const handleChange = (e) => {
    setForm((prevForm) => ({
      ...prevForm,
      [e.target.name]: e.target.value,
    }));
  };

  // console.log(form);

  return (
    <form className="mt-10 flex flex-col gap-4">
      <label className="text-2xl">
        Name{" "}
        <input
          className="border-2 border-slate-900 rounded p-2"
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          //   onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label className="text-2xl">
        Email{" "}
        <input
          className="border-2 border-slate-900 rounded p-2"
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          //   onChange={(e) => setEmail(e.target.value)}
        />
      </label>
    </form>
  );
};

export default Form;
