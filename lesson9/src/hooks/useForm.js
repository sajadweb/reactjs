import { useState, useEffect, memo, useCallback } from "react";

const useForm = () => {
  const [form, setForm] = useState({});
  //const onChange = useCallback(fun)
  //const onChange = useCallback(fun,[])
  //const onChange = ()=>()=>
  /**
  function a(key){
    return function (value){
setForm({
  key: value
})
    }
  }
  a(key)(value)
  function a(key,value){
    
  }
a(key, value)
  **/
  const onChange = useCallback(
    (type, key) => {
      return (e) => {
        if (type === "text")
          setForm({
            ...form,
            [key]: e.target.value,
          });
        if (type === "rest") setForm({});
        if (type === "..")
          setForm({
            ...form,
            [key]: e.target.value,
          });
      };
    },
    [setForm]
  );
  return [form, onChange];
};

const App = () => {
  const [form, onChange] = useForm();

  const handleSubmit = () => {
    console.log(form);
    alert(`${form.email} with password= ${form.password}`);
    onChange('rest','')('')
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
          onChange={onChange("text", "name")}
        />
        <br />
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" onChange={onChange("text", "email")} />
        <br />
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          name="password"
          onChange={onChange("text", "password")}
        />
        <br />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
};

export default App;
