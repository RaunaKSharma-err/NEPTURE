import axios from "axios";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";

interface formField {
  fullName: string;
  email: string;
  password: string;
}

const SignUp = () => {
  //   const [currentState, setCurrentState] = useState<string>("");
  const { register, handleSubmit } = useForm<formField>();
  const url = "http://localhost:5000/";
  const onSubmit: SubmitHandler<formField> = async (data) => {
    try {
      await axios.post(`${url}signup`, data);
      toast.success("Account created!");
      //   setCurrentState("login");
    } catch (error) {
      console.log("error while signup: ", error);
      toast.error("Email Already Exists!");
    }
  };
  return (
    <>
      <a href="#signup" className="btn bg-ORANGE border-none text-WHITE font-bold">
        SignUp
      </a>
      <div className="modal" role="dialog" id="signup">
        <div className="modal-box">
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
                {...register("password", {
                  minLength: {
                    value: 8,
                    message: "Password must be atleast  of 8 characters",
                  },
                })}
              />
              <label className="label mt-3">
                <a href="/login" className="label-text-alt link link-hover">
                  Already have account? <span>Login</span>
                </a>
              </label>
            </div>
            <div className="form-control mt-4">
              <button type="submit" className="btn btn-primary font-bold">
                Sign Up
              </button>
            </div>
          </form>
          <a
            href=""
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
          >
            ✕
          </a>
        </div>
      </div>

      <ToastContainer autoClose={2000} />
    </>
  );
};

export default SignUp;
