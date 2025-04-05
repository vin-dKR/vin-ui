import FirstGrid from "./FirstGrid"
import ForthGrid from "./ForthGird"
import SecondGrid from "./SecondGrid"
import ThirdGrid from "./ThirdGrid"

const Bento = () => {
    return (
        <div className="w-full md:w-3/5 py-32 m-auto justify-center items-center grid grid-cols-9 sm:grid-cols-5 gap-4">
            <FirstGrid />
            <SecondGrid />
            <ThirdGrid />
            <ForthGrid />
        </div>
    )
}

export default Bento
