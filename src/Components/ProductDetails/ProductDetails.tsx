import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { ProductDetailsFunction } from "../../Redux/productDetails/act/DetailsAct";
import { useParams } from "react-router-dom";
const ProductDetails = () => {
  const { details } = useAppSelector((state) => state.ProductDetails);
  const { id } = useParams();
  const dispatch = useAppDispatch();
  const { Loading, error } = useAppSelector((state) => state.ProductDetails);

  useEffect(() => {
    if (id) {
      dispatch(ProductDetailsFunction(id));
    }
  }, [dispatch, id]);

  if (Loading === "pending") {
    return (
      <div className="text-center text-red-900">
        <h1>Loading Data</h1>
      </div>
    );
  }
  if (Loading === "failed" || error) {
    return (
      <div className="text-center text-red-900">
        <h1>{error || "Fetching Error"}</h1>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-lg shadow-blue-800 p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <img
                src={details.imageCover}
                alt={details.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-between">
              <div>
                <h1 className="text-3xl font-bold mb-4">{details.title}</h1>
                <p className="text-gray-800 font-bold mb-4">{details.description}</p>
                <p className="text-lg mb-2 font-bold">Quantity: {details.quantity}</p>
                <p className="text-2xl font-bold text-blue-600 mb-6">
                  ${details.price}
                </p>
              </div>
              <button className="bg-gradient-to-l from-[#020024] to-[#007991] text-white py-3 px-6 rounded-lg hover:opacity-90 transition-opacity">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
