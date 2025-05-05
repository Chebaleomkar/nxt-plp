import ProductPrice from "../components/ProductPrice"
const ProductCard = ({ product }) => {
    return (
        <div className="border p-4 rounded-lg shadow-lg">
            <img 
                src={product?.image} 
                alt={product?.title}
                className="w-full h-48 object-contain mb-4"
            />
            <div className="h-auto flex flex-col  ">
            <span className="text-lg font-bold">{product?.title}</span>
            <ProductPrice price={product?.price} />
            </div>
        </div>
    )
}

export default ProductCard
