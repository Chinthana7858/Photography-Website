

import { useParams } from "react-router";
import NavBar from "../Ui/Templates/NavBar";
import { useEffect, useState } from "react";
import axios from "axios";
import { ChangeButton, CloseButton, ContinueWritingButton } from "../Ui/Atoms/Buttons";
import UpdateBlogTitlePopup from "../Popups/UpdateBlogTitlePopup";
import UpdateBlogDescriptionpopup from "../Popups/UpdateBlogDescriptionpopup";
import UpdateBlogPhotoPopup from "../Popups/UpdateBlogPhotoPopup";
import Footer from "../Ui/Templates/Footer";
import AddSubTopicPopup from "../Popups/AddSubTopicPopup";


interface Blog  {
  id: string,
  title: string,
  description: string,
  publishDate: string,
  blogPhotoUrl: string,
  isPublished: boolean,
};

function UpdateBlog() {

  const { blogId } = useParams<{ blogId: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [visibleUpdateTitle, setVisibleUpdateTitle] = useState(false);
  const [visibleUpdateDisc, setVisibleUpdateDisc] = useState(false);
  const [visibleUpdateBlogPhoto, setVisibleUpdateBlogPhoto] = useState(false);
  const [visibleAddSubTopic, setVisibleAddSubTopic] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/blog/${blogId}`);
        setBlog(response.data);
      } catch (error) {
        console.error("Error fetching portfolio:", error);
        setBlog(null); 
      }
    };

    fetchData();
  }, [blogId]);
    return (
      <div>
        <div className='fixed z-20 w-full'>
          <NavBar/>
        </div>
        <div className="pt-[25vh]">
        <div className="text-4xl text-center text-slate-700">{blog?.title}</div>
        <div className="text-4xl text-center text-slate-700"><button onClick={() => { setVisibleUpdateTitle(true)}}><ChangeButton/></button></div>
        </div>
        <div className="px-[20vw] pt-10 text-justify">
           {blog?.description} 
           <div><button onClick={() => { setVisibleUpdateDisc(true)}}><ChangeButton/></button></div>
        </div>

        <img
                  alt="About"
                  className="block object-cover object-center w-full h-full lg:pt-[10vh] px-[20vw]"
                  src={blog?.blogPhotoUrl}
                />
         <div className="px-[20vw]"><button onClick={() => { setVisibleUpdateBlogPhoto(true)}}><ChangeButton/></button></div>

         <div className="text-4xl text-center text-slate-700">
          <button onClick={() => { setVisibleAddSubTopic(true)}}><ContinueWritingButton/></button>
          </div>

          <div className="mt-[5vw]">
          <Footer/>
          </div>

        {visibleUpdateTitle && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen">
          <div className="md:w-[30%] xs:w-[75%] sm:w-[60%] h-[35%] max-w-2xl p- rounded-lg bg-blue-50 border border-black">
          <div className='pl-[95%]'><button onClick={() => setVisibleUpdateTitle(false)}><CloseButton/></button></div>
          <UpdateBlogTitlePopup blogId={blog?.id??''}/>
          </div>
        </div>

        
      )}
       {visibleUpdateDisc && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen">
          <div className="md:w-[45%] xs:w-[75%] sm:w-[60%] h-[65%] max-w-3xl p- rounded-lg bg-blue-50 border border-black">
          <div className='pl-[95%]'><button onClick={() => setVisibleUpdateDisc(false)}><CloseButton/></button></div>
          <UpdateBlogDescriptionpopup blogId={blog?.id??''}/>
          </div>
        </div>
      )}

       {visibleUpdateBlogPhoto && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen">
          <div className="md:w-[30%] xs:w-[75%] sm:w-[60%] h-[55%] max-w-2xl p- rounded-lg bg-blue-50 border border-black">
          <div className='pl-[95%]'><button onClick={() => setVisibleUpdateBlogPhoto(false)}><CloseButton/></button></div>
          <UpdateBlogPhotoPopup blogId={blog?.id??''}/>
          </div>
        </div>
      )}

      {visibleAddSubTopic && (
       <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen">
         <div className="md:w-[60%] xs:w-[75%] sm:w-[60%] h-[75%] max-w-2xl p- rounded-lg bg-blue-50 border border-black">
         <div className='pl-[95%]'><button onClick={() => setVisibleAddSubTopic(false)}><CloseButton/></button></div>
         <AddSubTopicPopup blogId={blog?.id??''}/>
         </div>
       </div>
     )}
      </div>
    );
  }
  export default UpdateBlog;
  