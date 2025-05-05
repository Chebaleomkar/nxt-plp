// ProductListing.js
"use client";
import { GoSidebarCollapse } from "react-icons/go";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import React, { useState } from "react";
import FilterSidebar from "../components/FilterSidebar";
import MobileFilterDialog from "../components/MobileFilterDialog";
import SortDropdown from "../components/SortDropDown";
import ProductCard from "../components/ProductCard";
import useProducts from "../hooks/useProducts"; 
import Loader from "../components/Loader";
import { Button } from "../components/ui/button";
import useSortStore from '../store/useSortStore';

const ProductListing = () => {
  const [showFilter, setShowFilter] = useState(true);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const { products, loading, error } = useProducts();
  const { sortOrder } = useSortStore();

  if (loading) return <Loader text="Fetching awesome products..." />;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  // Sort products based on sortOrder
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortOrder) {
      case 'price_low':
        return a.price - b.price;
      case 'price_high':
        return b.price - a.price;
      default:
        return 0; // Keep original order for 'recommended'
    }
  });

  return (
    <div className="w-full px-4 md:px-10 py-4">
      {/* Top bar */}
      <div className="flex items-center justify-between border-b pb-4">
        <div className="max-sm:hidden text-sm md:text-base font-medium">
          {products.length} ITEMS
        </div>

        <button
          className="md:hidden border rounded px-3 py-1"
          onClick={() => setShowMobileFilter(true)}
        >
          FILTERS
        </button>
        <div className="md:hidden"> <SortDropdown /> </div>

        <div className="hidden md:flex items-center gap-6">
          <Button
            className="text-sm font-semibold"
            onClick={() => setShowFilter(!showFilter)}
          >
            {showFilter ? <> <TbLayoutSidebarLeftCollapse />  HIDE FILTER </> :<>  <GoSidebarCollapse /> SHOW FILTER </>}
          </Button>

          <SortDropdown />
        </div>
      </div>

      <div className="mt-6 flex">
        {showFilter && (
          <div className="hidden md:block w-1/4 pr-6">
            <FilterSidebar />
          </div>
        )}

        <div className={`${showFilter ? "md:w-3/4" : "w-full"}`}>
          <div
            className={`grid grid-cols-2 ${
              showFilter ? "md:grid-cols-3 lg:grid-cols-3" : "md:grid-cols-4 lg:grid-cols-4"
            } gap-4`}
          >
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>

      <MobileFilterDialog
        open={showMobileFilter}
        onClose={() => setShowMobileFilter(false)}
      />
    </div>
  );
};

export default ProductListing;
