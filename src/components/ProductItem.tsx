import { Product } from "@/type/type";
import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@/redux/cart.slice";
import { RootState } from "../redux/store";

const ProductItem = ({ product }: { product: Product }) => {
  const cartData = useSelector((state: RootState) => state.cart.cart);
  const isAuth = useSelector((state: RootState) => state.auth.isAuth);

  const dispatch = useDispatch();
  const { id, image, title, category, price, rating } = product;
  const isDisabled = cartData.some((item) => item.id == id);
  function handleAddToCart() {
    if(!isAuth){
      return alert("Please Login")
    }
    const item = {
      ...product,
      quantity: 1,
    };
    dispatch(addToCart(item));
  }
  return (
    <div className="bg-gray-200 shadow-product rounded-lg cursor-pointer flex flex-col hover:bg-gray-400  ">
      <Link to={`/product/${id}`}>
        <div className="aspect-square w-full p-4  overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={image}
            alt="Front of men&#039;s Basic Tee in black."
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
      </Link>
      <div className="mt-4 flex flex-col justify-between  py-2 px-4  flex-grow">
        <Link to={`/product/${id}`}>
          <div>
            <h3 className="product-title line-clamp-2">{title}</h3>
            <p className="mt-1 text-sm text-gray-500">{category}</p>
          </div>
        </Link>

        <div>
          <div className="flex-center justify-between mt-4  w-full">
            <h3 className="text-lg font-semibold">₹{price}</h3>

            <div className="flex-center font-bold gap-2">
              <Star fill="gold" color="gold" size={"20px"} />
              {rating?.rate}
            </div>
          </div>
          <Button
            onClick={handleAddToCart}
            disabled={isDisabled}
            className=" w-full my-4 flex-grow-1"
          >
            Add To Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
