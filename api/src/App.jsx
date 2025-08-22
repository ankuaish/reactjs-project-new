import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    const url = "https://dummyjson.com/users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
  };
  return (
    <>
      <h1>Fetch/Get Data from API</h1>
    </>
  );
}

export default App;
