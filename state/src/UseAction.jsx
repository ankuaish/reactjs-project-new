import React from "react";
import { useActionState } from "react";

const UseAction = () => {
  const handleSubmit = async (previousData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    await new Promise((resolve) => setTimeout(resolve, 2000));
    if (name && password) {
      return { message: "Data Submitted", name, password };
    } else {
      return { error: "Failed to Submit. Enter proper data", name, password };
    }
  };
  const [data, action, pending] = useActionState(handleSubmit, undefined);
  return (
    <div>
      <h1>UseActionState hook in react</h1>
      <form action={action}>
        <input
          defaultValue={data?.name}
          type="text"
          placeholder="enter your name"
          name="name"
        />
        <br />
        <input
          defaultValue={data?.password}
          type="password"
          placeholder="enter password"
          name="password"
        />
        <br />
        <button disabled={pending}>Submit</button>
        {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
        {data?.message && (
          <span style={{ color: "green" }}>{data?.message}</span>
        )}
      </form>
      <h3>Name : {data?.name}</h3>
      <h3>Password : {data?.password}</h3>
    </div>
  );
};

export default UseAction;
