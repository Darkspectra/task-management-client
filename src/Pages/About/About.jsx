
import img1 from "../../assets/Home/banner.jpg"

const About = () => {
    return (
        <div className="flex items-center ml-28 mb-10 pt-16">
            <div className="ml-28 mt-20">
                <img src={img1} alt="" />
            </div>
            <div className="ml-16 mt-16">
                <p className="text-2xl">Task management is a crucial aspect of personal and professional productivity, encompassing the organization, planning, and execution of activities to achieve specific goals. Effective task management involves breaking down larger objectives into smaller, manageable tasks, prioritizing them, and systematically working towards their completion.</p>
            </div>
        </div>
    );
};

export default About;