import React, { useActionState } from "react";

const UseAct = () => {
  const handleLogin = (prevData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    let regex = /^[A-Z0-9]+$/i;

    if (!name || name.length > 5) {
      return {
        error: "Name should not be empty and contain  more than 5 characters ",
        name,
        password,
      };
    } else if (!regex.test(password)) {
      return {
        error: " Password will contain only numbers and alphabets",
        name,
        password,
      };
    } else {
      return { message: "Login done ", name, password };
    }
  };

  const [data, action] = useActionState(handleLogin);
  return (
    <>
      <h1>Validation with useActionState in React </h1>
      {data?.message && <span style={{ color: "green" }}>{data?.message}</span>}
      {data?.error && <span style={{ color: "red" }}>{data?.error}</span>}
      <form action={action}>
        <input
          type="text"
          defaultValue={data?.name}
          name="name"
          placeholder="enter your name"
        />
        <br />
        <br />
        <input
          type="text"
          defaultValue={data?.password}
          name="password"
          placeholder="enter your password"
        />
        <br />
        <br />
        <button>Login</button>
      </form>
    </>
  );
};

export default UseAct;
