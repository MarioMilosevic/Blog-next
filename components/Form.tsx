"use client";

import { useState, FormEvent } from "react";

const Form = () => {
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
  });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newUser);
  };

  return (
    <form
      className="bg-slate-800 p-4 rounded-xl w-[500px] mx-auto mt-40 flex flex-col gap-4"
      onSubmit={submitHandler}
    >
      <h1 className="text-center">Add new user</h1>
      <input
        type="text"
        placeholder="Name"
        name="name"
        className="border p-2 rounded-xl"
        onChange={(e) =>
          setNewUser((prev) => ({ ...prev, name: e.target.value }))
        }
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        className="border p-2 rounded-xl"
        onChange={(e) =>
          setNewUser((prev) => ({ ...prev, email: e.target.value }))
        }
      />
      <button
        type="submit"
        className="bg-slate-600 px-2 py-1 rounded-xl cursor-pointer hover:bg-slate-700"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
