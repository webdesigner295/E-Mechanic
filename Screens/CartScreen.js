import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { ProductCard } from "../Components/ProductCard";
import { store } from "../redux/store";
import { getProduct } from "../util";

export const CartScreen = () => {
    
    const items = useSelector(state => state.items);


    return (
        <ScrollView contentContainerStyle={{justifyContent: 'center', backgroundColor: '#FAF9F6'}}> 
        {
          items.map(
            (value, index) =>  {
              const productInfo = getProduct(value.id);
              const name = productInfo.name;
              const price = productInfo.price;
              const uri = productInfo.uri;
              const count = value.count;

              return(
              <ProductCard 
              name={name} price={price} key={index} uri={uri} 
              count={count} id={value.id}
              />
              );
            }
            )
        }     
        </ScrollView>
      );
}