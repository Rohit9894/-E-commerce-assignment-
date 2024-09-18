import { getdata, sortData } from "@/api/product";
import BottomDrawer from "@/components/BottomDrawer";
import ProductItem from "@/components/ProductItem";
import SortFilter from "@/components/SortFilter";
import { Product } from "@/type/type";
import { useEffect, useRef, useState } from "react";
const category = [
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];
const LandingPage = () => {
  const globalDataRef = useRef<Product[]>([]);
  const [productData, setProductData] = useState<Product[]>([]);
  const [sort, setSort] = useState<boolean>(false);
  const [filter, setFilter] = useState<boolean>(false);
  const [selected, setSelected] = useState<string[]>([]);

  const fetchData = async () => {
    const { data } = await getdata();
    globalDataRef.current = data;
    setProductData(data);
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { value, checked } = e.target;
    if (checked) {
      setSelected((prevSelected) => [...prevSelected, value]);
    } else {
      setSelected((prevSelected) =>
        prevSelected.filter((item) => item !== value)
      );
    }
  }
  function filterData() {
    if (selected.length == 0) {
      setProductData(globalDataRef.current);
    } else {
      const filteredData = globalDataRef.current.filter((item) =>
        selected.includes(item.category)
      );
      setProductData(filteredData);
    }
  }

  async function handleSort(e: React.ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    if (value == "") {
      setProductData(globalDataRef.current);
    } else {
      const { data } = await sortData(value);
      setProductData(data);
    }
  }
  // /for initial fetch data data
  useEffect(() => {
    fetchData();
  }, []);
  // for filtering data
  useEffect(() => {
    filterData();
  }, [selected]);
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
                value={"desc"}
                onChange={handleSort}
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
                value={"asc"}
                onChange={handleSort}
                className="cursor-pointer"
              />
              <label className="block text-lg font-medium leading-6 ">
                High to Low
              </label>
            </div>
          </div>
        </BottomDrawer>
      )}

      {/* filter */}
      {filter && (
        <BottomDrawer show={sort} setShow={setFilter}>
          <div className="h-full flex flex-col gap-4 ">
            {category?.length > 0 &&
              category.map((item) => (
                <div className="flex-center gap-4">
                  <input
                    type="checkbox"
                    checked={selected.includes(item)}
                    value={item}
                    onChange={handleChange}
                    name="priceOrder"
                    className="cursor-pointer"
                  />
                  <label className="block text-lg font-medium leading-6 ">
                    {item}
                  </label>
                </div>
              ))}
          </div>
        </BottomDrawer>
      )}

      <div className="container">
        {/* sort filter */}
        <SortFilter
          show={sort}
          filter={filter}
          setShow={setSort}
          setFilter={setFilter}
        />
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
