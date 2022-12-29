import RFValue form 'react-native';
import Ionicons from 'reactnative-vector-icons/Ionicons';
import { FlatList } from 'react-native';

export default class postcard extends React.PureComponent {
render(){
    return(
        <view>
            <images source = {require("../assets/post.jpeg")} style={align = 'center'}/>            <text
            style = {align="center"}
            >Spectagram app</text>
            <view style = {styles.cardContainer}>
                <FlatList   
                keyExtractor={this.keyExtractor}
                data = {posts}
                renderItem={this.renderItem}                
                / >

            </view>

        </view>
    )
}
}

const styles = StyleSheet.create({
    container: { }, flex: 1, backgroundColor: "black00," 
    droidSafeArea: { marginTop: Platform.OS }, 
    appTitle: { }, 
    flex: 0.07, flexDirection: "row" appIcon: { }, 
    flex: 0.2, justifyContent: "center", alignItems: "center",
    iconImage: { width: "100%", resizeMode: "contain" height: "100%", }, 
    appTitleTextContainer: { }, flex: 0.8, justifyContent: "center",
     appTitleText: { color: "white", fontSize: RFValue(28), },
    cardContainer: { flex: 0.85 } }); 