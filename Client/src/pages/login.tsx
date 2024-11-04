import axios from "axios";
import { useCookies } from "react-cookie";
import { useForm, SubmitHandler } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUserContext } from "../context/loginContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface formField {
  fullName: string;
  email: string;
  password: string;
}

const Login = () => {
  const navigate = useNavigate();
  const [cookies, setCookies] = useCookies(["user"]);
  const { register, handleSubmit } = useForm<formField>();
  const { setUser } = useUserContext();
  const url = "http://localhost:5000/";

  useEffect(() => {
    if (cookies.user && cookies.user.user.fullName && cookies.user.user.email) {
      setUser({
        fullName: cookies.user.user.fullName,
        email: cookies.user.user.email,
      });
    }
  }, [cookies, setUser]);

  const onSubmit: SubmitHandler<formField> = async (data) => {
    try {
      const User = await axios.post(`${url}login`, data);
      if (!User) {
        throw new Error("user not found");
      }
      setCookies("user", User.data);
      setUser(cookies.user);
      toast.success("Login success");
      navigate("/");
    } catch (error) {
      console.log("error while login: ", error);
      toast.error("incorrect username or password!");
    }
  };
  return (
    <>
      <a href="#login" className=" text-WHITE font-bold">
        Login
      </a>
      <div className="modal" role="dialog" id="login">
        <div className="modal-box bg-BLACK">
          <form
            className="card-body bg-BLACK"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered bg-BLACK"
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
                className="input input-bordered bg-BLACK"
                required
                {...register("password", {
                  minLength: {
                    value: 8,
                    message: "Password must be atleast  of 8 characters",
                  },
                })}
              />
              <label className="label mt-3">
                <a href="/#signup" className="label-text-alt link link-hover">
                  Not a member? <span>Signup</span>
                </a>
              </label>
            </div>
            <div className="form-control mt-4">
              <button type="submit" className="btn">
                Login
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
export default Login;
