import CartItem from "@/components/CartItem";
import PriceItem from "@/components/PriceItem";
import { Button } from "@/components/ui/button";
import { Product } from "@/type/type";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useNavigate } from "react-router-dom";

function Cart() {
  const navigate=useNavigate()
  const cartData: Product[] = useSelector(
    (state: RootState) => state.cart.cart
  );
  const total = +cartData
    .reduce((a, item) => a + item.price * item.quantity, 0)
    .toFixed(2);
  const tax = cartData.length > 0 ? 140 : 0;
  const grandTotal = (Number(total) + Number(tax)).toFixed(2);
  function handleOrder(){
    alert("Your order is placed")
    navigate("/")
  }

  return (
    <div className="container mt-20">
      {cartData.length > 0 ? (
        cartData.map((item) => <CartItem key={item.id} item={item} />)
      ) : (
        <h1>Please Add To Cart</h1>
      )}
      {/* Total */}
      <div className="bg-gray-200 rounded-lg mt-8 sm:max-w-screen-md mx-auto">
        <PriceItem item="SubTotal" price={total} />
        <PriceItem item="Tax" price={total > 0 ? 100 : 0} />
        <PriceItem item="Shipping" price={total > 0 ? 40 : 0} />
        <div className="flex-center p-4 justify-between">
          <p className="font-semibold text-xl">Total</p>
          <p className="font-semibold text-xl">
            ₹ {total > 0 ? grandTotal : 0}
          </p>
        </div>
      </div>
      {/* order button */}
      <div className="w-full flex justify-center">
        <Button onClick={handleOrder} className="mx-auto w-full sm:max-w-screen-md my-4  h-12 text-xl">
          Order
        </Button>
      </div>
    </div>
  );
}

export default Cart;
