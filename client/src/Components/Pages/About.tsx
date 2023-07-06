
import Description from "../Ui/Organisms/Description";
import Footer from "../Ui/Templates/Footer";
import NavBar from "../Ui/Templates/NavBar";


function About() {
  function openFullscreen(arg0: string): void {
    throw new Error("Function not implemented.");
  }

    return (
      <div>
        <div className='fixed z-20 w-full'>
          <NavBar/>
        </div>

        <div className="lg:flex-row flex flex-col w-[100vw] h-full">
          <div className="h-full basis-1/2 bg-slate-400 lg:pb-[17vh] pb-0">
          <h1 className="text-center pt-[20vh] text-3xl text-slate-700">ABOUT</h1>
          <div className="p-10 text-justify">
            <Description/>
          </div>
          </div>
          <div className="h-full basis-1/2">
          <img
                  alt="About"
                  className="block object-cover object-center w-full h-full lg:pt-[10vh] pt-0"
                  src="https://i.imgur.com/anF9E38.jpg"
                />
          </div>
        </div>
        <div className="">
        <Footer/>
      </div>
      </div>
    );
  }
  export default About;
  