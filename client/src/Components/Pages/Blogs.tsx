
import NavBar from "../Ui/Templates/NavBar";

function Blogs() {

    const blogs=[
        {
            img:'',
            paragraph:''
        },
        {
            img:'',
            paragraph:""
        }
    ]
    return (
      <div>
        <div className='fixed z-20 w-full'>
          <NavBar/>
        </div>

        <div>
            <div>
            <img
                  alt="Contact"
                  className="block object-cover object-center w-full h-full lg:pt-[10.5vh] pt-0"
                  src="https://i.imgur.com/E3S5LDv.jpg"
                />
            </div>

            <h1 className="text-center py-[5vh] text-4xl text-slate-700"> B L O G </h1>
        </div>
      </div>
    );
  }
  export default Blogs;
  