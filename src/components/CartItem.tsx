import { deleteToCart, updateToCart } from "@/redux/cart.slice";
import { Product } from "@/type/type";
import { Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";

const CartItem = ({ item }: { item: Product }) => {
  const { id, image, title, category, price, quantity = 0 } = item;
  const dispatch = useDispatch();
  function decQuantity(id: number, value: number) {
    if (quantity == 0) {
      dispatch(deleteToCart(id));
    } else {
      dispatch(updateToCart({ id, value: value }));
    }
  }

  return (
    <>
      {quantity > 0 && (
        <div className="flex gap-4 border-b border-b-gray-300 pb-4 mt-4">
          {/* image */}
          <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img
              src={image}
              alt={title}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* details */}
          <div className="w-full">
            <h4 className="!text-[16px] product-title line-clamp-1">{title}</h4>
            <div className="flex-center justify-between mt-2">
              <p className="mt-1 text-sm text-gray-500">{category}</p>
              <h3 className="text-[16px] font-bold">₹ {price}</h3>
            </div>
            {/* buttons */}
            <div className="flex-center justify-between mt-4">
              <div className="flex-center border border-gray-500 gap-4 w-max py-0.5 px-2 rounded-lg">
                <Plus
                  onClick={() => dispatch(updateToCart({ id, value: 1 }))}
                  cursor={"pointer"}
                  color="gray"
                  size={"20px"}
                />
                <span className="font-semibold">{quantity}</span>
                <Minus
                  onClick={() => decQuantity(id, -1)}
                  cursor={"pointer"}
                  color="gray"
                  size={"20px"}
                />
              </div>
              <div onClick={() => dispatch(deleteToCart(id))}>
                <p className="text-indigo-800 hover:text-indigo-500  cursor-pointer">
                  Remove
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartItem;
