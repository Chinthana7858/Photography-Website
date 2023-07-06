import { Button, Card, Checkbox, Input, Typography } from "@material-tailwind/react";
import { FaFacebook, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { SiShutterstock } from "react-icons/si";
import NavBar from "../Ui/Templates/NavBar";
import { BsInstagram } from "react-icons/bs";
import Description from "../Ui/Organisms/Description";
import Footer from "../Ui/Templates/Footer";

function Contact() {
    return (
      <div>
        <div className='fixed z-20 w-full'>
          <NavBar/>
        </div>
        <div className="lg:flex-row flex flex-col w-[100vw] h-full">
          <div className="h-full basis-1/2 bg-slate-400 lg:pb-[17vh] pb-0">
          <h1 className="text-center pt-[20vh] text-3xl text-slate-700">CONTACT</h1>
          <div className="p-10 text-center">
          If you have any questions or comments 
          about my artwork, please complete the 
          form below. I will be in touch within 24 hours. 
          I can’t wait to hear from you!
          </div>

          <div className="text-center">
          <Card color="transparent" shadow={false}>
  
         <div className="font-normal">
          Enter your details
         </div>
        <form className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96 lg:ml-[20%] ml-[7%]">
        <div className="flex flex-col gap-6 mb-4">
          <Input size="lg" label="Name" />
          <Input size="lg" label="Email" />
          <Input type="Subject" size="lg" label="Subject" />
          <Input type="Message" size="lg" label="Message" />
        </div>
        <button className="px-6 py-3 text-white bg-blue-700 cursor-pointer hover:bg-blue-800">
          Submit
        </button>
        </form>
        </Card>
        </div>
          </div>
          <div className="h-full basis-1/2">
          <img
                  alt="Contact"
                  className="block object-cover object-center w-full h-full lg:pt-[10.5vh] pt-0"
                  src="https://i.imgur.com/WiuMTNo.jpg"
                />
          </div>
        </div>
        <div className="">
        <Footer/>
      </div>
      </div>
    );
  }
  export default Contact;
  