import { Footer } from "../components/footer";
import { Header } from "../components/header";
import "../css/home.css";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
  return (
    <>
      <Header />
      <div className="w-[100%] h-[110vh]">
        <img className="w-[100%] h-[100%] relative heroImg" src="/bgh.jpg" />
      </div>
      <div className="content absolute top-[155px] left-5 text-BLACK font-bold">
        <p className="ml-4 tracking-widest content1">
          LIFE IS <span className="text-WHITE">SHORT TO ARGUE</span>
        </p>
        <p className="content2">
          Just <span className="text-WHITE">Plan Your Trip</span> <br /> With Us
          <span className="text-WHITE"> And Fly Around</span>
        </p>
        <a
          href="/plan-your-trip"
          className="btn bg-BLACK text-WHITE mt-5 w-[200px] tracking-widest"
        >
          Plan Your Trip
        </a>
      </div>
      <Footer />
    </>
  );
};
