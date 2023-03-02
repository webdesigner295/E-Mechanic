import { ScrollView, View, Image, SafeAreaView, Text, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import { ProductCard } from "../Components/ProductCard";
import { getProduct } from "../util";

export const CartScreen = () => {
    
    const items = useSelector(state => state.items);


    return (
        <SafeAreaView>
          <View style={styles.logoContainer}>
            <Text style={styles.text}>Cart</Text>
            <Image source={require('../Image/Vector1.png')}/>
          </View>
        
          <ScrollView style={{height: 500}} > 
          {
            items.map(
              (value) =>  {
                const productInfo = getProduct(value.id);
                const name = productInfo.name;
                const price = productInfo.price;
                const uri = productInfo.uri;
                const count = value.count;

                return(
                <ProductCard 
                name={name} price={price} key={value.id} uri={uri} 
                count={count} id={value.id}
                />
                );
              }
              )
          }     
          </ScrollView>
        </SafeAreaView>
      );
}

const styles = StyleSheet.create({
  text: {
    marginHorizontal: 10,
    marginTop: 100,
    fontWeight: 'bold',
    fontSize: 20
  },
  logoContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  }

})