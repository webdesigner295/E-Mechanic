import {FloatingAction} from 'react-native-floating-action';
import { useSelector } from 'react-redux';
import {MaterialIcons} from 'react-native-vector-icons';
import { View, Text, StyleSheet } from 'react-native';

export const CartIcon = (props) => {
    const count = useSelector(state => state.count);
    const color = count === 0 ? 'black' : 'red'; 
    let fab = null;

    return <FloatingAction color='#4BC500' buttonSize={65}
        onPressMain={() => props.navigation.navigate('CartScreen')}
     floatingIcon={
        (<View style = {styles.container}>
         <Text style={{color: color}}> {count} </Text>
         <MaterialIcons name='shopping-cart' size={30} />
        </View>)
    } />;
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center'
    },
});