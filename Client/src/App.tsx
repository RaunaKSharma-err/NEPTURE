import "./App.css";

function App() {
  return (
    <>
      <div className="w-[100vw] h-[100vh] bg-gray-300">
        <div className="navbar text-black">
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
                  <a>Booking</a>
                </li>
                <li>
                  <a>Packages</a>
                  <ul className="p-2">
                    <li>
                      <a>Package 1</a>
                    </li>
                    <li>
                      <a>Package 2</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a>Schedule</a>
                </li>
                <li>
                  <a>About Us</a>
                </li>
              </ul>
            </div>
            <a className="btn btn-ghost text-xl">NEPTURE</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <details>
                  <summary>Parent</summary>
                  <ul className="p-2">
                    <li>
                      <a>Submenu 1</a>
                    </li>
                    <li>
                      <a>Submenu 2</a>
                    </li>
                  </ul>
                </details>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <div className="navbar-end">
            <a className="btn">Button</a>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
