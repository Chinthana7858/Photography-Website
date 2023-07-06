import Description from "../Ui/Organisms/Description";
import Footer from "../Ui/Templates/Footer";
import NavBar from "../Ui/Templates/NavBar";
import Slider from "../Ui/Templates/Slider";

function HomePage() {
  return (
    <div className="flex-col">
      <div className='fixed z-20 w-full'>
        <NavBar/>
      </div>
      <div className="pt-24">
        <Slider/>
      </div>
      <div className="" >

       <div className="flex flex-col my-5 md:flex-row">

       <div className=" pt-[1vw] basis-1/2">
          <div>
          <h2 className="px-5 font-serif text-2xl text-slate-600">
            Welcome to
          </h2>
          <h2 className="px-5 font-serif text-2xl text-slate-600">
            Chinthana Prabhashitha Travel Photography
          </h2>
          <h3 className="px-5">
           <Description/> 
          </h3>
          </div>

        </div>

        <div className="relative my-5 bg-cover px-44 py-36 basis-1/2" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}https://i.imgur.com/ulU2lOA.jpg)`}}>
        </div>
 
        </div> 
        <div className="flex flex-col md:flex-row">

        <a href="/Gallery" className="w-full h-[30vh] bg-cover cursor-pointer hover:scale-95 flex flex-col justify-center items-center md:h-[50vh]">
        <div className="w-full h-[30vh] bg-cover cursor-pointer hover:scale-95 flex flex-col justify-center items-center md:h-[50vh]" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}https://i.imgur.com/AHqrip3.jpg)` }}>
        <div className="flex items-center">
        <div className="font-bold text-slate-300 text-7xl md:text-9xl">Gallery</div>
        </div> 
        </div>
        </a>

        <a href="/Blogs" className="w-full h-[30vh] bg-cover cursor-pointer hover:scale-95 flex flex-col justify-center items-center md:h-[50vh]">
        <div className="w-full h-[30vh] bg-cover cursor-pointer hover:scale-95 flex flex-col justify-center items-center md:h-[50vh]" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}https://i.imgur.com/cQ4Jxyf.jpg)` }}>
        <div className="flex items-center">
        <div className="font-bold text-slate-300 text-7xl md:text-9xl">Articles</div>
        </div> 
        </div>
        </a>
      

     
       </div>





      </div>
      <div className="mt-[5vw]">
        <Footer/>
      </div>
    </div>
  );
}

export default HomePage;
