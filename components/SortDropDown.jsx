import { ChevronDown } from "lucide-react";
import useSortStore from "../store/useSortStore";

const SortDropdown = () => {
    const { sortOrder, setSortOrder } = useSortStore();

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <div className="relative w-full md:w-auto">
            <div className="relative inline-block w-full md:w-auto">
                <select
                    value={sortOrder}
                    onChange={handleSortChange}
                    className="w-full md:w-auto border-none appearance-none font-bold rounded-md text-sm bg-white text-gray-700 pr-8 py-2 pl-3 transition cursor-pointer"
                >
                    <option value="recommended">Recommended</option>
                    <option value="recommended">Popular</option>
                    <option value="price_low">Price: Low to High</option>
                    <option value="price_high">Price: High to Low</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 pointer-events-none" />
            </div>
        </div>
    );
};

export default SortDropdown;
