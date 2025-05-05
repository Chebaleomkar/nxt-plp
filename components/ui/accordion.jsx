import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; 

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div className="border-b">
            <div className="flex items-center justify-between" onClick={toggle}>
                <div className="flex flex-col">
                <span className="font-semibold mb-2 cursor-pointer">{title}</span>
                <p className="font-semibold mb-2 cursor-pointer">All</p>
                </div>
                <span className="text-gray-600 text-xl">
                    {isOpen ? (
                        <FaChevronUp />
                    ) : (
                        <FaChevronDown />
                    )}
                </span>
            </div>

            {isOpen && <div className="space-y-1 text-sm">{children}</div>}
        </div>
    );
};

export default Accordion;
