import { getdata } from "@/api/product";
import ProductItem from "@/components/ProductItem";
import SortFilter from "@/components/SortFilter";
import { Product } from "@/type/type";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [productData, setProductData] = useState<Product[]>([]);
  const fetchData = async () => {
    const { data } = await getdata();
    setProductData(data);
  };
  useEffect(() => {
    fetchData();
  },[]);
  return (
    <div className="container">
      {/* sort filter */}
      <SortFilter />
      {/* products */}
      <div className="mt-6 grid gap-8 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {productData.length > 0 &&
          productData.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
      </div>
    </div>
  );
};

export default LandingPage;
