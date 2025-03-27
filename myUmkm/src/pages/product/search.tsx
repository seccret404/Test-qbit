import React, { useEffect, useRef } from 'react';
import { Image, TextInput, View, StyleSheet, TouchableOpacity } from 'react-native';
import Left from '../../../assets/left.png';
import Mess from '../../../assets/mess.png';
import { useNavigation } from '@react-navigation/native';

export default function SearchPage() {
     const inputRef = useRef<TextInput>(null);
     const navigation = useNavigation();
     const toBack = () => {
          navigation.navigate("Main")
     }

     useEffect(() => {
          if (inputRef.current) {
               inputRef.current.focus(); 
          }
     }, []);

     return (
          <View style={styles.body}>
               <View style={styles.cTop}>
                    <TouchableOpacity onPress={toBack}>
                         <Image source={Left} width={40}/>
                    </TouchableOpacity>
                    <View>
                         <TextInput
                              ref={inputRef}
                              placeholder='Search item'
                              style={styles.Input}
                         />
                    </View>
                    <View>
                    <Image source={Mess} width={40}/>
                    </View>
               </View>
          </View>
     );
}

const styles = StyleSheet.create({
     body: {
          backgroundColor: '#F8F3D9',
          height: '100%'
     },
     cTop: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 10,
     },
     Input: {
          backgroundColor: '#EBE5C2',
          width: 250,
          height: 45,
          borderRadius: 25,
          color: '#B9B28A',
          paddingLeft: 20,
     },
});
