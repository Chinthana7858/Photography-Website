
import { useEffect, useState } from "react";
import { AddNewButton, ChangeButton, CloseButton } from "../Ui/Atoms/Buttons";
import NavBar from "../Ui/Templates/NavBar";
import BasicPhotoPopup from "../Popups/BasicPhotoPopup";
import axios from "axios";
import AddBlogPopup from "../Popups/AddBlogPopup";

interface Blog  {
  id: string,
  title: string,
  description: string,
  publishDate: string,
  blogPhotoUrl: string,
  isPublished: boolean,
};

function Blogs() {
  const [unpublishedBlog, setUnpublishedBlog] = useState<Blog[]>([]);
  const [visibleChangeBlogCover, setVisibleChangeBlogCover] = useState(false);
  const [visibleAddBlog, setVisibleAddBlog] = useState(false);
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);


  useEffect(() => {
    // Fetch unpublished
    axios
      .get(`http://localhost:8080/api/v1/blog/unpublished`)
      .then((response) => {
        setUnpublishedBlog(response.data);
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
        const response = await axios.get("http://localhost:8080/api/v1/images/blogcover");
        setPhotoUrl(response.data.imageUrl);
      } catch (error) {
        console.error("Error fetching photo URL:", error);
      }
    };
    return (
      <div>
        <div className='fixed z-20 w-full'>
          <NavBar/>
        </div>

        <div>
            <div>
            <img
                  alt="coverphoto"
                  className="block object-cover object-center w-full h-full lg:pt-[10.5vh] pt-0"
                  src={photoUrl??''}
                />
                <div className="p-4">
                <button onClick={() => { setVisibleChangeBlogCover(true)}}>
                   <ChangeButton/>
                </button>
                </div>
            </div>
            
          <div className="text-center py-[2vh] text-4xl text-slate-700">B L O G</div>
          <div className="text-4xl text-center text-slate-700">
          <button onClick={() =>{setVisibleAddBlog(true)}}><AddNewButton/></button>
          </div>
        </div>

        <div className='p-6 m-8 bg-red-100'>
        <div className="text-center pt-[2vh] text-2xl text-slate-700">Unpublished</div>

        <table>
      <tbody>
  <div className="grid grid-cols-4 gap-4 xs:grid-cols-2">
    {unpublishedBlog
      .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
      .map((unpublishedBlog) => (
        <a key={unpublishedBlog.id} href={`/UpdateBlog/${unpublishedBlog.id}`}>
          <div className="">
            <div className="text-xl font-semibold text-slate-600 xs:text-sm sm:text-lg">
              {unpublishedBlog.title}
            </div>
            <div className="">
            <img
            src={unpublishedBlog.blogPhotoUrl}
            alt={`Image ${unpublishedBlog.id}`}
            className="aspect-[3/2]"
            />
            </div>
          </div>
        </a>
      ))}
  </div>
</tbody>

    </table>

        </div>


        {visibleChangeBlogCover && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen">
          <div className="md:w-[30%] xs:w-[75%] sm:w-[60%] h-[55%] max-w-2xl p- rounded-lg bg-blue-50 border border-black">
          <div className='pl-[95%]'><button onClick={() => setVisibleChangeBlogCover(false)}><CloseButton/></button></div>
          <BasicPhotoPopup id={"blogcover"}/>
          </div>
        </div>
      )}

        {visibleAddBlog && (
        <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen">
          <div className="md:w-[45%] xs:w-[75%] sm:w-[60%] h-[65%] max-w-3xl rounded-lg bg-blue-50 border border-black">
          <div className='pl-[95%]'><button onClick={() => setVisibleAddBlog(false)}><CloseButton/></button></div>
          <AddBlogPopup/>
          </div>
        </div>
      )}
      </div>
    );
  }
  export default Blogs;
  