import { useNavigate } from "react-router-dom"

function NotFound() {

const navigate = useNavigate()


    return(
    <div className="h-screen w-full flex flex-col justify-center items-center bg-[rgb(17,23,42)]">
        <h1 className="text-9xl font-bold text-white ">404</h1>
        <div className="bg-black text-white absolute px-2 text-sm rounded rotate-12">
            Page not found...
        </div>
        <button className="mt-5">
            <a  className="relative inline-block text-sm font-medium text-[#FF6A3D] active:text-yellow-500 focus:outline-none border border-current" onClick={() => {
                    navigate(-1)
                }}>
                <span className="relative block px-8 py-3 bg-[#1a2238]"  >Go Back</span>
            </a>
        </button>
    </div>
    )
}

export default NotFound