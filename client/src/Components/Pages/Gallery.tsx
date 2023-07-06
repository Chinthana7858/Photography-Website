import NavBar from "../Ui/Templates/NavBar";
import { useState } from "react";

function Gallery() {
    const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  
    const openFullscreen = (imageSrc: string) => {
      setFullscreenImage(imageSrc);
    };
  
    const closeFullscreen = () => {
      setFullscreenImage(null);
    };

  return (
    <div>
      <div className='fixed w-full'>
        <NavBar />
      </div>

      <div>
      <div className="py-5 lg:pt-[110px] md:pt-[110px] sm:pt-[100px] xs:pt-[100px]">
      <div className="flex flex-wrap -m-1 md:-m-2">
      <div className="flex flex-wrap w-1/3">
      <div className="w-full">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sm"
          src="https://i.imgur.com/ulU2lOA.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/ulU2lOA.jpg")}/>
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sm"
          src="https://i.imgur.com/vDe8U7i.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/vDe8U7i.jpg")}/>
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sm"
          src="https://i.imgur.com/7XaROpy.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/7XaROpy.jpg")}/>
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sm"
          src="https://i.imgur.com/RFkZcva.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/RFkZcva.jpg")}/>
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sm"
          src="https://i.imgur.com/8aAzQ6q.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/8aAzQ6q.jpg")}/>
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/Er5CFdi.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/Er5CFdi.jpg")}/>
          
      </div>
      </div>

      <div className="flex flex-wrap w-1/3">
      <div className="w-full">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sm"
          src="https://i.imgur.com/OIffB3y.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/OIffB3y.jpg")}/>
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sm"
          src="https://i.imgur.com/k2tS0MK.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/k2tS0MK.jpg")}/>
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sm"
          src="https://i.imgur.com/doPZgv7.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/doPZgv7.jpg")}/>
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sm"
          src="https://i.imgur.com/kDFJVL9.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/kDFJVL9.jpg")}/>
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sm"
          src="https://i.imgur.com/nCQ0cIs.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/nCQ0cIs.jpg")}/>
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/EP9J5sw.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/EP9J5sw.jpg")}/>
          
      </div>
      </div>

      <div className="flex flex-wrap w-1/3">
      <div className="w-full">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sm"
          src="https://i.imgur.com/VoCTVGo.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/VoCTVGo.jpg")}/>
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sm"
          src="https://i.imgur.com/srvIf6x.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/srvIf6x.jpg")}/>
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sm"
          src="https://i.imgur.com/W7dXhKg.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/W7dXhKg.jpg")}/>
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sm"
          src="https://i.imgur.com/AcGk3dY.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/AcGk3dY.jpg")}/>
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sm"
          src="https://i.imgur.com/I9Pcqoz.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/I9Pcqoz.jpg")}/>
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/NCbjKX4.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/NCbjKX4.jpg")}/>
          
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/v0kLcix.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/v0kLcix.jpg")}/>
          
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/9bAZ1uM.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/9bAZ1uM.jpg")}/>
          
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/d6UChwp.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/d6UChwp.jpg")}/>
          
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/5AAaawG.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/5AAaawG.jpg")}/>
          
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/Sa2uFG9.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/Sa2uFG9.jpg")}/>
          
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/TSgxpia.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/TSgxpia.jpg")}/>
          
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/hRdfDMf.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/hRdfDMf.jpg")}/>
          
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/L7Ri92W.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/L7Ri92W.jpg")}/>
          
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/UZKiNeF.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/UZKiNeF.jpg")}/>
          
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/dQUvz70.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/dQUvz70.jpg")}/>
          
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/ecSxfA2.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/ecSxfA2.jpg")}/>
          
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/yh7VIhs.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/yh7VIhs.jpg")}/>
          
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/key7H45.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/key7H45.jpg")}/>
          
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/6t2sN5Q.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/6t2sN5Q.jpg")}/>
          
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/R0NRNaY.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/R0NRNaY.jpg")}/>
          
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/JhxU7Sc.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/JhxU7Sc.jpg")}/>
          
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/6XbTvV9.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/6XbTvV9.jpg")}/>
          
      </div>
      </div>
      <div className="flex flex-wrap w-1/3">
      <div className="w-full ">
        <img
          alt="gallery"
          className="block object-cover object-center w-full h-full rounded-sms"
          src="https://i.imgur.com/vjy9KDJ.jpg" 
          onClick={() => openFullscreen("https://i.imgur.com/vjy9KDJ.jpg")}/>
          
      </div>
      </div>
      </div>
      </div>

      </div>

      {fullscreenImage && (
        <div className="fixed top-0 left-0 flex items-center justify-center w-full h-full bg-black">
          <img
            alt="gallery"
            className="object-contain max-h-full"
            src={fullscreenImage}
            onClick={closeFullscreen}
          />
        </div>
      )}
    </div>
  );
}

export default Gallery;
