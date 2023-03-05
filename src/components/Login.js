import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { loginFromAPI } from "../store/actions/auth-actions";
import { Link } from "react-router-dom";

const Login = () => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    password: "",
    email: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginFromAPI(formData));

    //Reset form
    setFormData({
      password: "",
      email: "",
    });
  };

  // useEffect(() => {

  //   if (isSuccess) {

  //     dispatch(clearState());

  //     history.push('/');

  //   }

  //   if (isError) {

  //     toast.error(errorMessage);

  //     dispatch(clearState());

  //   }

  // }, [isSuccess, isError]);

  return (
    <form onSubmit={handleSubmit}>
      <div className="container h-100 py-5 w-25">
        <h3 className="text-primary">Sign In</h3>
        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary w-50">
            Signin
          </button>

          <Link to="/register" className="entypo-user-add register">
            Register
          </Link>
        </div>
      </div>
    </form>
  );
};

export default Login;
