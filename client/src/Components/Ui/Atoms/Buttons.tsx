import { RxCross2 } from "react-icons/rx";
import { AiFillDelete} from "react-icons/ai";

export function ChangeButton(){
    return(
        <div>
        <button className="text-white bg-blue-400 rounded-md xs:text-xs xs:p-1 md:text-sm md:p-2 sm:text-sm sm:p-2 hover:bg-blue-600">
            Update
        </button>
        </div>
    );
}
export function DELButton(){
    return(
        <div>
        <button className="text-white bg-red-400 rounded-md xs:text-xs xs:p-1 md:text-sm md:p-2 sm:text-sm sm:p-2 hover:bg-red-600">
            Delete
        </button>
        </div>
    );
}

export function DELButton2(){
    return(
        <div>
        <button className="text-white bg-red-400 rounded-md xs:text-xs xs:p-1 md:text-sm md:p-2 sm:text-sm sm:p-2 hover:bg-red-600">
        <AiFillDelete size="1em"/>
        </button>
        </div>
    );
}
export function SubmitButton(){
    return(
        <div>
        <button className="text-white bg-blue-400 rounded-md xs:text-xs xs:p-1 md:text-sm md:p-2 sm:text-sm sm:p-2 hover:bg-blue-600">
            Submit
        </button>
        </div>
    );
}


export function AddNewButton(){
    return(
        <div>
        <button className="text-white bg-blue-400 rounded-md xs:text-sm xs:p-2 md:text-md md:p-3 sm:text-md sm:p-3 hover:bg-blue-600">
            Add New
        </button>
        </div>
    );
}

export  function CloseButton() {
    return (
      <div>
        <button className=" p-1 text-sm font-semibold text-white bg-[#ce3a3a] rounded-sm hover:bg-[#bb2944]">
          <div className='flex'><span className="font-normal text-md"></span> <span className=''><RxCross2 size="1em"/></span> </div>
        </button>
      </div>
    )
}

export function ContinueWritingButton(){
    return(
        <div>
        <button className="text-white bg-blue-400 rounded-md xs:text-sm xs:p-2 md:text-md md:p-3 sm:text-md sm:p-3 hover:bg-blue-600">
            Continue Writing
        </button>
        </div>
    );
}