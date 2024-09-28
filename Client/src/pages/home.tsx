import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "../css/home.css";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="w-[100%] h-[110vh]">
        <img className="w-[100%] h-[100%] relative heroImg" src="/bgh.jpg" />
      </div>
      <div className="content absolute top-[155px] left-5 text-BLACK font-bold">
        <p className="ml-4 tracking-widest">
          LIFE IS <span className="text-WHITE">SHORT TO ARGUE</span>
        </p>
        <h1 className="text-[50px]">
          Just <span className="text-WHITE">Plan Your Trip</span> <br /> With Us
          <span className="text-WHITE">And Fly Around</span>
        </h1>
        <button className="btn bg-BLACK text-WHITE mt-5 w-[200px] tracking-widest">
          Plan Your Trip
        </button>
      </div>
      <Footer />
    </>
  );
};
