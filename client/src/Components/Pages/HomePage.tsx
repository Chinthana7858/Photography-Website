
import { ChangeButton, CloseButton } from "../Ui/Atoms/Buttons";
import Footer from "../Ui/Templates/Footer";
import NavBar from "../Ui/Templates/NavBar";
import Slider from "../Ui/Templates/Slider";
import IntroPopup from "../Popups/IntroPopup";
import axios from "axios";
import { useEffect, useState } from "react";
import BasicPhotoPopup from "../Popups/BasicPhotoPopup";

interface Details {
  detailsId: string;
  name: string;
  email: string;
  password: string;
  introduction: string;
  fbLink: string;
  instergramLink: string;
  shutterstockLink: string;
  twitterLink: string;
}


interface Portfolio {
  id: string;
  portfolioName:string;
  about: string;
  coverImgUrl:string;
  dateTime:string;
}


function HomePage() {
  const [visibleChangeIntro, setVisibleChangeIntro] = useState(false);
  const [visibleChangeIntroPhoto, setVisibleChangeIntroPhoto] = useState(false);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [details, setDetails] = useState<Details | null>(null);
  const detailsId = "1"; // Replace this with the desired detailsId
  const [portfolio, setPortfolio] = useState<Portfolio[]>([]);

  useEffect(() => {
    // Fetch Latest 2 portfolios from the API
    axios
      .get(`http://localhost:8080/api/v1/portfolio/latest2`)
      .then((response) => {
        setPortfolio(response.data);
      })
      .catch((error) => {
        console.error("Error fetching images:", error);
      });
  }, []);

  // Fetch the photo URL from the server when the component mounts
  useEffect(() => {
    fetchPhotoUrl();
  }, []);

  const fetchPhotoUrl = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/v1/images/introPhoto");
      setPhotoUrl(response.data.imageUrl);
    } catch (error) {
      console.error("Error fetching photo URL:", error);
    }
  };

  useEffect(() => {
    // Fetch the details by detailsId
    getDetailsById(detailsId);
  }, [detailsId]);

  const getDetailsById = async (detailsId: string) => {
    try {
      const response = await axios.get<Details>(`http://localhost:8080/api/v1/details/${detailsId}`);
      setDetails(response.data);
    } catch (error) {
      console.error("Error:", error);
      setDetails(null);
    }
  };

  if (!details) {
    // Render a loading state or handle the absence of details
    return <div>Loading...</div>;
  }

  function formatDate(datetimeStr: string): string {
    const date = new Date(datetimeStr);
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate().toString().padStart(2, '0');
  
    return `${month}/${day}`;
  }

  return (
    <div className="flex-col">
      <div className='fixed z-20 w-full'>
        <NavBar/>
      </div>
      <div className="pt-24 pb-4">
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
          {details.introduction}
          </h3>
           <button onClick={() => { setVisibleChangeIntro(true)}} className="px-5">
           <ChangeButton/>
           </button>
          </div>

        </div>
        
        <div className="relative my-5 bg-cover px-44 py-36 basis-1/2" style={{
                        backgroundImage: `url(${photoUrl})`,
                      }}>
           <div className='absolute bottom-0 left-0'>
           <button onClick={() => { setVisibleChangeIntroPhoto(true)}} className="px-5">
           <ChangeButton/>
           </button>
           </div>
        </div>
        </div> 

        <div className="text-center pt-[2vh] text-4xl text-slate-700">Whats New</div>
        <div className="flex p-6 xs:p-4 xs:flex-col">
          <div className="basis-1/2">
          <tbody>
        <div className="grid grid-cols-2 gap-3">
        {portfolio
        .sort((a, b) => new Date(b.dateTime).getTime() - new Date(a.dateTime).getTime())
        .map((portfolio) => (
        <a key={portfolio.id} href={`/Portfolio/${portfolio.id}`}>
          <div className="">
            <span className="flex">
              <span className="text-xl font-semibold text-slate-600 xs:text-sm sm:text-lg basis-1/2">
              {portfolio.portfolioName}
              </span>
              <span className="pr-2 text-sm font-semibold text-right opacity-60 basis-1/2 text-blue-950 xs:text-xs">
              {formatDate(portfolio.dateTime)}
              </span>
            </span>
            <div className="">
            <img
            src={portfolio.coverImgUrl}
            alt={`Image ${portfolio.id}`}
            className="aspect-[3/2] hover:scale-95 hover:opacity-95"
            />
            </div>
          </div>
        </a>
        ))}
        </div>
        </tbody>
          </div>
          <div className="basis-1/2"></div>
        </div>


        <div className="flex flex-col md:flex-row">

        <a href="/Portfolio" className="w-full h-[30vh] bg-cover cursor-pointer hover:scale-95 flex flex-col justify-center items-center md:h-[50vh]">
        <div className="w-full h-[30vh] bg-cover cursor-pointer hover:scale-95 flex flex-col justify-center items-center md:h-[50vh]" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}https://i.imgur.com/OM7VTcn.jpg)` }}>
        <div className="flex items-center">
        <div className="font-bold text-slate-300 text-7xl md:text-9xl">Gallery</div>
        </div> 
        </div>
        </a>

        <a href="/Blogs" className="w-full h-[30vh] bg-cover cursor-pointer hover:scale-95 flex flex-col justify-center items-center md:h-[50vh]">
        <div className="w-full h-[30vh] bg-cover cursor-pointer hover:scale-95 flex flex-col justify-center items-center md:h-[50vh]" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}https://i.imgur.com/kri7cZJ.jpg)` }}>
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

      {visibleChangeIntro && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen">
          <div className="w-[90%] h-[75%] max-w-2xl p- rounded-lg bg-blue-50 border border-black">
          <div className='pl-[95%]'><button onClick={() => setVisibleChangeIntro(false)}><CloseButton/></button></div>
          <IntroPopup/>
          </div>
        </div>
      )}
      {visibleChangeIntroPhoto && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen">
          <div className="md:w-[30%] xs:w-[75%] sm:w-[60%] h-[55%] max-w-2xl p- rounded-lg bg-blue-50 border border-black">
          <div className='pl-[95%]'><button onClick={() => setVisibleChangeIntroPhoto(false)}><CloseButton/></button></div>
          <BasicPhotoPopup id={"introPhoto"}/>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomePage;
 
