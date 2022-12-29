import React from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default class feed extends React.Component{
  render()
  {return (
    <View style = {styles.container}>
      <SafeAreaView style = {styles.driodSafeArea}/>
      <View style = {styles.appTitle}>
      <View style = { styles.appIcon}><Image
      source = {require("../assets/post.jpeg")} style={align = 'center'}/>            <text
      style = {styles.iconImage}/>
      
      
      </View>
      <View style = {styles.appTitleTextContainer}>
        <Text style={styles.appTitleText}>Spectagram</Text>

      </View>
      </View>

     <View style = {styles.cardContainer}>
      <FlatList
      keyExtractor={this.keyExtractor}
      data={posts}
      renderItem = {this.renderItem}

      />
     </View>
</View>
  );
}
}
