import { React, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as APPLICATION_URLS from '../utils/ApplicationURLs';
const Login = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const handleChange = (name) => (event) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        'https://wu9gxbv1r1.execute-api.ap-south-1.amazonaws.com/prod/login',
        {
          email: values.email,
          password: values.password,
        }
      )
      .then((res) => {
        localStorage.setItem('email', values.email);
        localStorage.setItem('token', res.data.token);
        navigate(APPLICATION_URLS.PROPERTIES);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="transition-all duration-500 p-12 overflow-hidden mx-auto min-h-screen bg-black w-full md:p-36">
      <div className="bg-white text-black rounded-xl overflow-hidden text-white px-6 pb-12 md:px-12 shadow-xl md:w-[550px] mx-auto py-4">
        <form onSubmit={handleSubmit} className="overflow-hidden">
          <p className="font-extrabold text-4xl text-black text-center my-8 text-xl">
            PRYPTO
          </p>
          <label className="text-base font-semibold text-black mt-0">
            Email Address
          </label>
          <br />
          <input
            className="focus:outline focus:border-[#EDABC2] border outline-transparent outline-offset-2 rounded-md md:w-30 py-3 w-full mt-2 text-black pl-4"
            type="email"
            required
            onChange={handleChange('email')}
            placeholder={'E.g. yourname@gmail.com'}
            value={values.email}
          />
          <br />
          <br />
          <label className="text-base font-semibold text-black">Password</label>
          <br />
          <input
            className="focus:outline focus:border-[#EDABC2] border outline-transparent outline-offset-2 rounded-md md:w-30 py-3 w-full mt-2 text-black pl-4"
            type="text"
            value={values.password}
            onChange={handleChange('password')}
            placeholder={'Enter your password'}
            required
          />
          <button
            type="submit"
            className="text-black bg-white border hover:bg-black mt-8 hover:text-white py-3 rounded-md w-full text-xl"
          >
            Login
          </button>
          <p className="text-xs text-slate-400 mt-6">
            By clicking Log In you agree to Stake's Terms & Conditions and Key
            Risks
          </p>
        </form>
      </div>
      <p className="text-white text-center mt-5 font-base">
        Don't have an account ?
        <span
          className="text-[#EDABC2] hover:text-[#fc90b6] font-bold cursor-pointer hover:underline ml-1"
          onClick={() => {
            navigate(APPLICATION_URLS.SIGNUP_PAGE);
          }}
        >
          Join us today
        </span>
      </p>
      <p className="text-white text-center text-sm mt-3">Regulated by DSFA</p>
    </div>
  );
};
export default Login;
