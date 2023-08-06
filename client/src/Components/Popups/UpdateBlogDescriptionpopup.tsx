import React, { useState, ChangeEvent, ChangeEventHandler } from "react";
import { SubmitButton } from "../Ui/Atoms/Buttons";
import axios from "axios";

function UpdateBlogDescriptionpopup(props: { blogId: string}) {
  const [blogdisc, setBlogdic] = useState("");
  const [isLoading, setIsLoading] = useState(false);


  const handleDiscChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setBlogdic(event.target.value);
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();


    const formData = new FormData();
    formData.append("description", blogdisc);

    try {
      setIsLoading(true);
      const response = await axios.put(`http://localhost:8080/api/v1/blog/description/${props.blogId}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      alert("Updated successfully!");
      console.log("Updated successfully!", response.data);
    } catch (error) {
      alert("Error updatingg description. Please try again.");
      console.error("Error updating description:", error);
    } finally {
      setIsLoading(false); 
    }
    window.location.reload();
  };

  const handleWindowResize = () => {
    // Check the window width and set the cols attribute accordingly
    if (window.innerWidth < 1000) {
      // For mobile view, set cols to a smaller value (e.g., 40)
      setCols(15);
    } else {
      // For desktop view, set cols to a larger value (e.g., 80)
      setCols(35);
    }
  };


  const [cols, setCols] = useState(45); // Default cols value for desktop view
  window.addEventListener("resize", handleWindowResize);
  
  return (
    <>
      <div className="flex justify-center mt-8">
        <form onSubmit={handleSubmit} className="w-1/2">

          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="about">
              Description
            </label>
            <textarea
              name="description"
              value={blogdisc}
              className="items-center border rounded-md border-slate-400"
              onChange={handleDiscChange}
              rows={12}
              cols={cols}
            />
            
          </div>
          <div className="flex items-center justify-center">
          {!isLoading && <button  type="submit"><SubmitButton/></button>}
          {isLoading && <p className='font-medium text-blue-700'>Uploading...</p>}
          </div>
        </form>
      </div>
    </>
  );
}

export default UpdateBlogDescriptionpopup;
