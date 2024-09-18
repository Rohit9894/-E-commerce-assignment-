import { singleData } from "@/api/product";
import { Button } from "@/components/ui/button";
import { Product } from "@/type/type";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cart.slice";
const ProductDetail = () => {
  const [item, setItem] = useState<Product>({} as Product);
  const dispatch = useDispatch();
  const { id } = useParams();
  const fetchData = async () => {
    const { data } = await singleData(id!);
    setItem(data);
  };
  function handleAddToCart() {
    const newItem = {
      ...item,
      quantity: 1,
    };
    dispatch(addToCart(newItem));
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="container flex flex-col md:flex-row md:gap-10 mt-20">
      <section id="image">
        <div className="aspect-square w-full p-4  overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            src={item?.image}
            alt="Front of men&#039;s Basic Tee in black."
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
      </section>
      <section id="details">
        <h3 className="product-title">{item?.title}</h3>
        <p className="mt-1 text-sm font-semibold text-gray-500">
          {item?.category}
        </p>
        <p className="mt-1 text-sm text-gray-500">{item?.description}</p>
        <div className="flex-center justify-between mt-4  w-full">
          <h3 className="text-xl font-semibold">₹{item?.price}</h3>
          <div className="flex-center font-bold gap-2">
            <Star fill="gold" color="gold" size={"20px"} />
            {item?.rating?.rate}
          </div>
        </div>
        <div className="flex-center justify-between my-4">
          {/* Buttons */}
          <Button>Buy Now</Button>
          <Button onClick={handleAddToCart}>Add To Cart</Button>
        </div>
      </section>
    </div>
  );
};

export default ProductDetail;
