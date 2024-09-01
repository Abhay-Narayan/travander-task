import LocationCard from "./components/LocationCard";
import SelectOptions from "./components/SelectOptions";
import { PRODUCTS } from "./assets/products";


export default function Home() {
  
  return (
    <div className="flex flex-col mx-auto w-[85%] items-center">
      <SelectOptions/>
      <div className="grid grid-cols-4 gap-10 mt-14">
        {PRODUCTS.map((product)=>(
          <LocationCard  product={product} key={product.id}/>
        ))}
      </div>
    </div>
  );
}
