import React from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../components/ui/sheet";
import { Filter } from "lucide-react";
import FilterSidebar from "./FilterSidebar";

const MobileFilterDialog = ({ open, onClose }) => {
    return (
        <Sheet open={open} onOpenChange={onClose}>
            <SheetTrigger className="md:hidden  items-center gap-1 px-4 py-2 border rounded-full text-sm">
                <Filter className="w-4 h-4" /> Filter
            </SheetTrigger>
            <SheetContent side="left" className="w-3/4 sm:w-1/2 p-3 overflow-auto">
                <SheetHeader>
                    <SheetTitle className="text-lg font-semibold">Filter Products</SheetTitle>
                </SheetHeader>
                <div className="mt-4">
                    <FilterSidebar />
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileFilterDialog;
