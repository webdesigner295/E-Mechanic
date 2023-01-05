import { View ,Text,SafeAreaView,Image,StyleSheet ,TouchableOpacity} from "react-native";
// import { Icon } from "react-native-vector-icons/icon";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const MidRange = ({navigation})=>{
    return(
        <SafeAreaView>
            <View style = {styles.Img1}>
                
                <Image source={require('../../Image/Vector7.png')}
                style ={{marginLeft:20,marginTop:60}}/>
            </View>
            <View>
                <Text style = {styles.h1}>
                    MidRnge <Text style ={{fontWeight:'normal',fontSize:18}}> {'\n'}Aslam</Text>
                </Text>
            </View>
            <View style = {{marginLeft:30,marginTop:5}}>
            {/* <FontAwesome5 name={'check-circle'} size ={30} color = "#4BC500"/> */}
            <Text style = {styles.list_icon}>
                <FontAwesome5  name={'check-circle'} size ={25} color = "#4BC500" backgroundColor="blue"/>  Comprehensive Checking
            </Text>
            <Text style = {styles.list_icon}>
                <FontAwesome5  name={'check-circle'} size ={25} color = "#4BC500" backgroundColor="blue"/>  Oil Filter
            </Text>
            <Text style = {styles.list_icon}>
                <FontAwesome5  name={'check-circle'} size ={25} color = "#4BC500" backgroundColor="blue"/>  Selected Filter
            </Text>
            <Text style = {styles.list_icon}>
                <FontAwesome5  name={'check-circle'} size ={25} color = "#4BC500" backgroundColor="blue"/>  Up to 70 point check
            </Text>

            </View>
            <View style = {{flexDirection:'row',justifyContent:'space-evenly',marginTop:5}}>
                <Text>Clients</Text>
                <Text>Experience</Text>
                <Text>Rating</Text>
            </View>
            <View style = {{flexDirection:'row',justifyContent:'space-evenly',marginTop:5}}>
                <Text style = {styles.p}>2.5k</Text>
                <Text style = {styles.p}>   3 yr</Text>
                <Text style = {styles.p}>       4.7</Text>
            </View>
            <TouchableOpacity
            onPress={()=> navigation.navigate('Booking')}
            style={styles.buttonStyle}
            activeOpacity={0.5}>
            <Text  onPress={()=>navigation.navigate('Booking')} style={styles.buttonTextStyle}>Book Appointment</Text>
          </TouchableOpacity>
            

            {/* <Icon name="checkcircle" size={30}/> */}
        </SafeAreaView>
    )
}
export default MidRange;
const styles = StyleSheet.create({
    Img1:{
        height:330,
        width:310,
        marginLeft:25,
        marginTop:20,
        borderRadius:20,
        // justifyContent:'center',
        backgroundColor:'#4BC500'

    },
    p:{
        fontWeight:"900",
        color:'#000',
        fontSize:16


    },
    buttonStyle: {
        backgroundColor: '#4BC500',
        borderWidth: 0,
        color: '#FFFFFF',
        borderColor: '#7DE24E',
        height:50,
        alignItems: 'center',
        borderRadius: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 0,
        marginBottom: 25,
      },
      buttonTextStyle: {
        color: '#FFFFFF',
        paddingVertical: 10,
        fontSize: 18,
        fontFamily: 'Roboto',
        fontWeight: '900'
      },
    list_icon:{
        marginTop:7,
        fontWeight:'bold',
        color:'#000',
        fontSize:20,
        

    },
    h1:{
        fontWeight:'900',
        fontSize:30,
        marginLeft:30,
        color:'#000'
    }

})