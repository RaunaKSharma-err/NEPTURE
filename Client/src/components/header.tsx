import "../css/header.css";
import Login from "../pages/login";
import SignUp from "../pages/Signup";

export const Header = () => {
  return (
    <>
      <div className="navbar absolute z-10 text-WHITE">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost text-BLACK lg:hidden">
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
                <a>Home</a>
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
                <a>About</a>
              </li>
            </ul>
          </div>
          <a href="/" className="btn btn-ghost text-3xl text-WHITE font-bold">
            NEPTURE
          </a>
        </div>
        <div className="navbar-center hidden lg:flex text-WHITE">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
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
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-4">
          <Login />
          <SignUp />
        </div>
      </div>
    </>
  );
};
