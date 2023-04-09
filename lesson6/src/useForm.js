import { useState, useEffect, memo } from "react";

const useForm = () => {
   //
  //
  return [form, setForm];
};

const App = () => {
  const [form, setForm] = useForm();

  const handleSubmit = () => {
    console.log(form);
    alert(`${form.email} with password= ${form.password}`);
  };
  return (
    <div>
      <h1>useForm</h1>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          onChange={(e) => setForm('name')(e.target.value)}
        />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          onChange={(e) => setForm('email')(e.target.value)}
        />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          onChange={(e) => setForm('password')(e.target.value)}
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default App;

