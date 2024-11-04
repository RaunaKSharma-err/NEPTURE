import { useEffect, useState } from "react";
import { useUserContext } from "../context/loginContext";
import "../css/header.css";
import Login from "../pages/login";
import SignUp from "../pages/Signup";
import { useCookies } from "react-cookie";

export const Header = () => {
  const { user } = useUserContext();
  const [isLogout, setIsLogout] = useState(false);
  const [, , removeCookie] = useCookies(["user"]);

  useEffect(() => {
    if (isLogout == true) {
      removeCookie("user");
      setIsLogout(false);
      window.location.href = "/";
    }
  }, [isLogout]);

  return (
    <>
      <div className="navbar absolute z-10 text-WHITE">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost text-BLACK lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-BLACK rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a>Package</a>
                <ul className="p-2 bg-BLACK">
                  <li>
                    <a>Special Package</a>
                  </li>
                  <li>
                    <a>Delux Package</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Places</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
            </ul>
          </div>
          <a
            href="/"
            className="btn btn-ghost text-5xl text-BLACK font-bold SiteLogo"
          >
            Nepture
          </a>
        </div>
        <div className="navbar-center hidden lg:flex text-WHITE">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <details>
                <summary>Package</summary>
                <ul className="p-2 bg-BLACK">
                  <li>
                    <a>Special Package</a>
                  </li>
                  <li>
                    <a>Delux Package</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Places</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
          </ul>
        </div>
        {user ? (
          <div className="navbar-end flex gap-4">
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full border-BLACK border-solid border-2">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li onClick={() => setIsLogout(!isLogout)}>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <div className="navbar-end flex gap-4">
            <Login />
            <SignUp />
          </div>
        )}
      </div>
    </>
  );
};
