import { FaSpinner } from "react-icons/fa";

const Loader = ({ text = "Loading..." }) => {
    return (
        <div className="flex flex-col items-center justify-center py-10 text-center text-gray-600">
            <FaSpinner className="animate-spin text-4xl mb-4 text-blue-500" />
            <p className="text-lg font-medium">{text}</p>
        </div>
    );
};

export default Loader;
