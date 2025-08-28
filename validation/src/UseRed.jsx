import React, { useReducer } from "react";

const emptyData = {
  name: "",
  password: "",
  email: "",
  city: "",
  address: "",
};

const reducer = (data, action) => {
  return { ...data, [action.type]: action.val };
};
const UseRed = () => {
  const [state, dispatch] = useReducer(reducer, emptyData);
  return (
    <div>
      <h1>UseReducer for State Management </h1>
      <input
        type="text"
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "name" })
        }
        placeholder="enter your name"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "password" })
        }
        placeholder="enter your password"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "email" })
        }
        placeholder="enter your email"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "address" })
        }
        placeholder="enter your address"
      />
      <br />
      <br />
      <input
        type="text"
        onChange={(event) =>
          dispatch({ val: event.target.value, type: "city" })
        }
        placeholder="enter your city"
      />
      <br />
      <br />
      <ul>
        <li>Name:{state.name}</li>
        <li>Name:{state.password}</li>
        <li>Name:{state.city}</li>
        <li>Name:{state.address}</li>
        <li>Name:{state.email}</li>
      </ul>
      <button
        onClick={() => {
          console.log(state);
        }}
      >
        submit
      </button>
    </div>
  );
};

export default UseRed;
