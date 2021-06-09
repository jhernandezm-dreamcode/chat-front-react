import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const setAsJhon = () => {
    const john = {
      name: "Jhon",
      email: "jhon@hotmail.com",
      password: "123",
      id: "123",
    };
    setUser(john);
  };
  const setAsTom = () => {
    const tom = {
      name: "Tom",
      email: "tom@hotmail.com",
      password: "456",
      id: "456",
    };
    setUser(tom);
  };
  return (
    <div>
      <h1>Home {JSON.stringify(user)}</h1>
      <button onClick={setAsJhon}>Jhon</button>
      <button onClick={setAsTom}>Tom</button>
      <Link to={"/chat"}>
        <button>Go to chat</button>
      </Link>
    </div>
  );
};

export default Home;
