import { useState } from "react";

export default function Form() {
  const [username, setUsername] = useState("");
  const [usernamelValidation, setusernameValidation] = useState("");
  const [age, setAge] = useState("");
  const [ageValidation, setAgeValidation] = useState("");
  const [email, setEmail] = useState("");
  const [emailValidation, setEmailValidation] = useState("");
  const [password, setPassword] = useState("");
  const [passwordValidation, setPasswordValidation] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordValidation, setConfirmPasswordValidation] = useState(
    ""
  );

  function handleUsername(event) {
    setUsername(event.target.value);
  }
  function handleAge(event) {
    setAge(event.target.value);
  }
  function handleEmail(event) {
    setEmail(event.target.value);
  }
  function handlePassword(event) {
    setPassword(event.target.value);
  }
  function handleconfirmPassword(event) {
    setConfirmPassword(event.target.value);
  }

  function validate() {
    if (username !== "nabarun") {
      setusernameValidation("Username is incorrect");
      if (username === "") {
        setusernameValidation("Username is a required fill");
      }
    } else {
      setUsername("");
    }

    if (age !== "28") {
      setAgeValidation("Age is incorrect");
      if (age === "") {
        setAgeValidation("Age is a required fill");
      }
    } else {
      setAge("");
    }

    if (email !== "nabarun@relevel.com") {
      setEmailValidation("Email is incorrect");
      if (email === "") {
        setEmailValidation("Email is a required fill");
      }
    } else {
      setEmail("");
    }

    if (password !== "12345") {
      setPasswordValidation("Password is incorrect");
      if (password === "") {
        setPasswordValidation("Password is a required fill");
      }
    } else {
      setPassword("");
    }

    if (confirmPassword !== "12345") {
      setConfirmPasswordValidation("Confirm Password is incorrect");
      if (confirmPassword === "") {
        setConfirmPasswordValidation("Confirm Password is a required fill");
      }
    } else if (
      username === "nabarun" &&
      age === "28" &&
      email === "nabarun@relevel.com" &&
      password === "12345" &&
      confirmPassword === "12345"
    )
      alert(
        "Username is nabarun, age is 28 and email is nabarun@relevel.com"
      ) ||
        setusernameValidation(" ") ||
        setAgeValidation("") ||
        setEmailValidation("") ||
        setPasswordValidation(" ") ||
        setConfirmPasswordValidation(" ");
  }

  return (
    <div>
      <h1>Sign-up Form</h1>
      <br />
      <h3>Username</h3>
      <input type="text" value={username} onChange={handleUsername} />
      <br />
      <span>{usernamelValidation}</span>

      <h3>Age</h3>
      <input type="text" value={age} onChange={handleAge} />
      <br />
      <span>{ageValidation}</span>

      <h3>Email</h3>
      <input type="text" value={email} onChange={handleEmail} />
      <br />
      <span>{emailValidation}</span>

      <h3>Password</h3>
      <input type="password" value={password} onChange={handlePassword} />
      <br />
      <span>{passwordValidation}</span>

      <h3>Confirm Password</h3>
      <input
        type="password"
        value={confirmPassword}
        onChange={handleconfirmPassword}
      />
      <br />
      <span>{confirmPasswordValidation}</span>
      <br />
      <div>
        <button type="submit" onClick={validate}>
          Validate your details
        </button>
      </div>
    </div>
  );
}
