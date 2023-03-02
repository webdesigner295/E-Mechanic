import { View, StyleSheet, Image , Text, Button, Pressable } from "react-native"
import { store } from "../redux/store";


export const ProductCard = (props) => {
    return (
        <View style={styles.rootContainer}>
            <View style={styles.productContainer}>
                <View style={styles.infoContainer}>
                    <Text style={styles.heading}>{props.name}</Text>
                    <Text style={{color: 'gray'}}>
                        Long body of text..... Long body of text..... Long body of text..... 
                    </Text>
                </View>
                <View style={styles.imageContainer}>
                    <Text style={{fontWeight: 'bold', textAlign: 'center', fontSize: 20}}>{props.price}</Text>
                    <Image style={styles.image} 
                    source={props.uri} />
                </View>
            </View>

            <View style={styles.buttonContainer}>
               <Text 
               style={{
                fontWeight: 'bold', 
                height: 'auto', 
                textAlignVertical: 'center',
                fontSize: 16,
                marginRight: 30
                }}
               > 
                {props.count}
               </Text>  
               <Pressable onPress={() => store.dispatch({type: 'remove', payload: props.id})}>
                    <Text style={{color: 'blue', fontWeight: 'bold', fontSize: 18}} > Remove </Text>
               </Pressable>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    rootContainer: {
        flexDirection: 'column',
        height: 150,
        borderColor: 'gray',
        borderCollapse: 'collapse',
        borderWidth: 1,
        paddingTop: 10,
        paddingHorizontal: 10
    },
    productContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoContainer: {
        flexDirection: 'column', 
        width: 220
    },
    image: {
        resizeMode: 'contain',
        height: 70,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 30,
    },
    imageContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
    buttonContainer: {
        flexDirection: 'row',
        margin: 10,
        justifyContent: 'flex-start'
    }
});