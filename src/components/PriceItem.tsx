interface prcieItemProps {
  item: string;
  price: number;
}
const PriceItem = (props: prcieItemProps) => {
  return (
    <div className="p-4">
      <div className="flex-center pb-2 justify-between border-b border-gray-400">
        <p className="text-gray-600 text-lg">{props?.item}</p>
        <p className="text-gray-600  text-lg">₹ {props?.price}</p>
      </div>
    </div>
  );
};

export default PriceItem;
