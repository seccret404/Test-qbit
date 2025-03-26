import React, { useEffect, useRef } from 'react';
import { Image, TextInput, View, StyleSheet } from 'react-native';
import Mess from '../../../assets/mess.png';
import User from '../../../assets/user.png';

export default function SearchPage() {
     const inputRef = useRef<TextInput>(null);

     useEffect(() => {
          if (inputRef.current) {
               inputRef.current.focus(); 
          }
     }, []);

     return (
          <View style={styles.body}>
               <View style={styles.cTop}>
                    <View>
                         <Image source={User} />
                    </View>
                    <View>
                         <TextInput
                              ref={inputRef}
                              placeholder='Search item'
                              style={styles.Input}
                         />
                    </View>
                    <View>
                         <Image source={Mess} />
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
