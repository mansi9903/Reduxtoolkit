import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { postUserInfo } from "../../store/features/UserInfoSlice";

const SignupPage = () => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.userInfo);
  const [data, setData] = useState({
    name: "",
    username: "",
    mail: "",
    dob: "",
    password: "",
    gender: "",
  });
  useEffect(() => {
    console.log(info);
  }, [info]);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postUserInfo(data));
  };

  return (
    <>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            name="name"
            value={data.name}
            placeholder="name"
            type="text"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            name="username"
            value={data.username}
            placeholder="Username"
            type="text"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            name="mail"
            value={data.mail}
            placeholder="mail"
            type="email"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="date"
            name="dob"
            value={data.dob}
            placeholder="dob"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <input
            type="radio"
            name="gender"
            value={"Female"}
            id="Female"
            onChange={(e) => handleChange(e)}
          />
          <label for="Female">Female</label>
          <br />
          <input
            type="radio"
            name="gender"
            value={"Male"}
            id="Male"
            onChange={(e) => handleChange(e)}
          />
          <label for="Male">Male</label>
          <br />
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="password"
            onChange={(e) => handleChange(e)}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
