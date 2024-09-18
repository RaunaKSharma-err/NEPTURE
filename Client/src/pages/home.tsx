import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "../css/home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <img
        className="w-[100vw] h-[100vh] relative heroImg"
        src="/StockCake-Desert Road Trip_1726650263.jpg"
      />
      <div className="content absolute top-[355px] left-5 text-ORANGE font-bold">
        <p className="ml-4">
          LIFE IS <span className="text-WHITE ml-5">SHORT TO ARGUE</span>
        </p>
        <h1 className="text-5xl ">
          Just <span className="text-WHITE pl-4">Plan Your Trip</span> <br />{" "}
          With Us <span className="text-WHITE">And Fly Around</span>
        </h1>
      </div>
      <Footer />
    </>
  );
};
