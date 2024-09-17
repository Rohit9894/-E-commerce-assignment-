import CartItem from "@/components/CartItem";
import PriceItem from "@/components/PriceItem";
import { Button } from "@/components/ui/button";

function Cart() {
  return (
    <div className="container">
      <CartItem />
      {/* Total */}
      <div className="bg-gray-200 rounded-lg mt-8">
        <PriceItem item="SubTotal" price={2000} />
        <PriceItem item="Tax" price={100} />
        <PriceItem item="Shipping" price={40} />
        <div className="flex-center p-4 justify-between">
          <p className="font-semibold text-xl">Total</p>
          <p className="font-semibold text-xl">₹ 2000</p>
        </div>
      </div>
      {/* order button */}
      <Button className=" my-4 w-full h-12 text-xl">Order</Button>
    </div>
  );
}

export default Cart;
