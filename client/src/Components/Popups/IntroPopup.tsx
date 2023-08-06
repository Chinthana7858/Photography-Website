import React, { useState } from "react";
import { SubmitButton } from "../Ui/Atoms/Buttons";
import axios from "axios";

function IntroPopup() {
  // Define state to hold the input field values
  const [formValues, setFormValues] = useState({
    introduction: "",
  });

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  
    try {
      // Send the form data to the backend using Axios
      const response = await axios.put(`http://localhost:8080/api/v1/details/1/introduction`, formValues, {
        headers: { 
          'Content-Type': 'application/json'
        }
      });
  
      // Handle the server's response
      const data = response.data;
      console.log('Server response:', data);
  
      // Reset the form values
      setFormValues({
        introduction: "",
      });
    } catch (error) {
      // Handle any errors that occur during the HTTP request
      console.error('Error:', error);
    }
  };
  


  // Handle input field changes
  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormValues((prevState: any) => ({
      ...prevState,
      [name]: value
    }));
  };

    const handleWindowResize = () => {
    // Check the window width and set the cols attribute accordingly
    if (window.innerWidth < 768) {
      // For mobile view, set cols to a smaller value (e.g., 40)
      setCols(30);
    } else {
      // For desktop view, set cols to a larger value (e.g., 80)
      setCols(60);
    }
  };

  const [cols, setCols] = useState(60); // Default cols value for desktop view
  window.addEventListener("resize", handleWindowResize);
  return (
    <>
      <div className="bg-blue-50">
        <h1 className="pb-2 text-xl font-semibold text-center text-slate-700">Update introduction</h1>
        <div className="text-center">
          <form onSubmit={handleSubmit}>
            <textarea
              name="introduction"
              value={formValues.introduction}
              className="p-1 m-2 border rounded-md border-slate-400"
              onChange={handleInputChange}
              rows={15}
              cols={cols}
            />
            <div className="text-center">
              <button type="submit" onClick={() => window.location.reload()}>
                <SubmitButton />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default IntroPopup;
