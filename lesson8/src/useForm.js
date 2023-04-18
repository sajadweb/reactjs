import { useState, useEffect, memo, useCallback } from "react";

const useForm = () => {
  const [form, setForm] = useState({});
  const onChange = useCallback(
    (key) => {
      return (value) => {
        setForm({
          ...form,
          [key]: value,
        });
      };
    },
    [setForm]
  );
  return [form, onChange];
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
          value={form?.name}
          onChange={(e) => setForm("text")("name")}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          name="email"
          onChange={(e) => setForm("email")(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          onChange={(e) => setForm("password")(e.target.value)}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default App;
