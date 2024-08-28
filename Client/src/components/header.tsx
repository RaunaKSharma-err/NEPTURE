import "../css/header.css";

export const Header = () => {
  return (
    <>
      <div className="navbar text-black mt-3 pl-10 pr-20">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden font-bold"
            >
              NEPTURE
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="">Booking</a>
              </li>
              <li>
                <a href="">Packages</a>
                <ul className="p-2">
                  <li>
                    <a href="">Package 1</a>
                  </li>
                  <li>
                    <a href="">Package 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="">Schedule</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl font-bold tracking-widest">
            NEPTURE
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Booking</a>
            </li>
            <li>
              <details>
                <summary>Packages</summary>
                <ul className="p-2">
                  <li>
                    <a>Package 1</a>
                  </li>
                  <li>
                    <a>Package 2</a>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <a>Schedule</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end flex gap-7">
          <a className="font-bold text-black">Login</a>
          <a className="btn">Sign Up</a>
        </div>
      </div>
    </>
  );
};
