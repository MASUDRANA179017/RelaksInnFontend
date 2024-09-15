import React, { useEffect, useState } from "react";
import axios from "axios";
import Input from "../component/Input";

const Login = () => {
  let [allUser, setAllUser] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleInputChange = (e, name) => {
    if (name === "email") {
      setEmail(e.target.value);
    } else if (name === "password") {
      setPassword(e.target.value);
    }
  };

  const handleSubmit = () => {
    axios
      .post("http://localhost:8000/api/login", {
        email: email,
        password: password,
      })
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    async function usersData() {
      try {
        let response = await axios.get("http://localhost:8000/api/userlist");
        console.log(response.data.data.userList); // Log the userList array
        setAllUser(response.data.data.userList);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    }
    usersData();
  }, []);
  

    // console.log(allUser);

  return (
    <>
      <div>
        <h1>Login Page</h1>
        <Input
          className="custom-input"
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={handleInputChange}
          name="email"
        />
        <Input
          className="custom-input"
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={handleInputChange}
          name="password"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      <ul>
      {Array.isArray(allUser) && allUser.length > 0 ? (
        allUser.map((item) => (
          <li key={item._id}>
            <strong>Name:</strong> {item.name} <br />
            <strong>Email:</strong> {item.email} <br />
            <strong>Phone:</strong> {item.phone}
          </li>
        ))
      ) : (
        <li>No users found</li>
      )}
    </ul>
    </>
  );
}; 

export default Login;
