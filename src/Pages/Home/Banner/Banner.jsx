
import { Link } from "react-router-dom";
import img1 from "../../../assets/Home/banner.jpg"

const Banner = () => {
    return (
        <div className="flex items-center ml-28 mb-10">
            <div className="ml-28 mt-20">
                <img src={img1} alt="" />
            </div>
            <div className="ml-16 mt-16">
                <h2 className="text-5xl font-bold">Want to create Task? <br /> Explore More!!</h2>
                <Link className="text-2xl btn mx-10 mt-10" to="/login">Explore!!</Link>
            </div>
        </div>
    );
};

export default Banner;