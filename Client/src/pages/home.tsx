import "../css/home.css";
import { Header } from "../components/header";

export const Home = () => {
  return (
    <>
      <div className="header h-[40px] w-[100%] bg-white"></div>
      <div className="bg-gray-300 h-[100vh] w-[100vw] flex flex-col justify-center relative">
        <div className="container bg-gray-200 h-[70vh] w-[95vw] shadow-lg ml-[40px]">
          <Header />
          <img
            src="../public/9175914a8f40dec08ffd5d773bff42dd-ai-brush-removebg-u60xxov-x7OZl-hlM-transformed.png"
            className="w-[600px] h-[600px] absolute right-36 top-6 overflow-hidden"
          />
          <p className="mt-14 mb-3 ml-[70px] font-bold text-black">
            Life is Very Short to Argue
          </p>
          <p className="font-bold tracking-wider w-[600px] text-5xl text-black ml-14">
            Just Plan Your Trip And Fly Around !
          </p>
          <p className="w-[400px] text-black mt-3 ml-14">
            Start Your Adventure with us in a click and lets explore the nature
            of the world together.
          </p>
          <button className="btn ml-14 mt-8 tracking-widest">
            Plan Your Trip
          </button>
        </div>
        <div className="container bg-white h-[30vh] w-[95vw] ml-[40px] shadow-lg z-10"></div>
      </div>
    </>
  );
};
