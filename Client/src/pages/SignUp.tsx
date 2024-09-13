import axios from "axios";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";

interface formField {
  fullName: string;
  email: string;
  password: string;
}

export const SignUp = () => {
  const [getData, setData] = useState({});

  axios.post("http://localhost:5000/signup", getData);

  const { register, handleSubmit } = useForm<formField>();

  const onSubmit: SubmitHandler<formField> = (data) => {
    setData(data);
  };

  return (
    <>
      <Header />
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">SignUp now!</h1>
            <p className="py-6"></p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Username</span>
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="input input-bordered"
                  required
                  {...register("fullName")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                  {...register("email")}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  {...register("password")}
                />
                <label className="label mt-3">
                  <a href="/login" className="label-text-alt link link-hover">
                    Already have account? <span>Login</span>
                  </a>
                </label>
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary">Sign Up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
