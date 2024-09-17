import { Minus, Plus } from "lucide-react";

const CartItem = () => {
  return (
    <div className="flex gap-4 border-b border-b-gray-300 pb-4">
      {/* image */}
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
        <img
          src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg"
          alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt."
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* details */}
      <div className="w-full">
        <h4 className="!text-[16px] product-title line-clamp-1">
          Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
        </h4>
        <div className="flex-center justify-between mt-2">
          <p className="mt-1 text-sm text-gray-500">Electronics</p>
          <h3 className="text-[16px] font-bold">₹ 9999</h3>
        </div>
        {/* buttons */}
        <div className="flex-center justify-between mt-4">
          <div className="flex-center border border-gray-500 gap-4 w-max py-0.5 px-2 rounded-lg">
            <Plus cursor={"pointer"} color="gray" size={"20px"} />
            <span className="font-semibold">1</span>
            <Minus cursor={"pointer"} color="gray" size={"20px"} />
          </div>
          <p className="text-indigo-800 hover:text-indigo-500  cursor-pointer">Remove</p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
