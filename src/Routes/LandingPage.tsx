import { getdata } from "@/api/product";
import BottomDrawer from "@/components/BottomDrawer";
import ProductItem from "@/components/ProductItem";
import SortFilter from "@/components/SortFilter";
import { Product } from "@/type/type";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const [productData, setProductData] = useState<Product[]>([]);
  const [sort, setSort] = useState<boolean>(false);
  // const [filter,setFilter]=useState<boolean>(f)

  const fetchData = async () => {
    const { data } = await getdata();
    setProductData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {/* Sort */}
      {sort && (
        <BottomDrawer show={sort} setShow={setSort}>
          <div className="h-full flex flex-col gap-4 ">
            <div className="flex-center gap-4">
              <input
                type="radio"
                id="low-to-high"
                name="priceOrder"
                className="cursor-pointer"
              />
              <label className="block text-lg font-medium leading-6 ">
                Low to High
              </label>
            </div>
            <div className="flex-center gap-4">
              <input
                type="radio"
                id="high-to-low"
                name="priceOrder"
                className="cursor-pointer"
              />
              <label className="block text-lg font-medium leading-6 ">
                High to Low
              </label>
            </div>
          </div>
        </BottomDrawer>
      )}

      <div className="container">
        {/* sort filter */}
        <SortFilter show={sort} setShow={setSort} />
        {/* products */}
        <div className="mt-6 grid gap-8 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {productData.length > 0 &&
            productData.map((item) => (
              <ProductItem key={item.id} product={item} />
            ))}
        </div>
      </div>
    </>
  );
};

export default LandingPage;
