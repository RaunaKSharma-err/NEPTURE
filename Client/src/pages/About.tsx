import { Footer } from "../components/footer";
import { Header } from "../components/header";

const About = () => {
  return (
    <>
      <Header />
      <img
        src="/Screenshot 2024-11-02 202513.jpg"
        alt=""
        className="absolute w-[100%] h-[100%]"
      />
      <img
        src="/woman-being-ready-vacation-with-luggage-travel-essentials_23-2148434343.jpg"
        alt=""
        className="w-[30%] left-[70%] top absolute"
      />
      <div className="hero min-h-screen text-WHITE">
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-BLACK">Hello there</h1>
            <p className="mb-5 text-WHITE">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
