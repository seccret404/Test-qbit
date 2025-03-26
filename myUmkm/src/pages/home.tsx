import React from 'react'
import { Image, Text, TextInput, View, StyleSheet, FlatList, TouchableOpacity, ScrollView } from 'react-native'
import Mess from '../../assets/mess.png'
import User from '../../assets/user.png'
import Decor from '../../assets/decor.png'
import Tools from '../../assets/tools.png'
import House from '../../assets/Houseware.png'
import Furniture from '../../assets/furniture.png'
import ProductCard from '../components/productCard'
import { useNavigation } from '@react-navigation/native'
export default function HomePage() {
  const categoryItems = [
    { id: "1", category: "Furniture", image: Furniture },
    { id: "2", category: "Decoration", image: Decor },
    { id: "3", category: "Tools", image: Tools },
    { id: "4", category: "Houseware", image: House }
  ]

  const navigation = useNavigation();
  const toSearch = () => {
    navigation.navigate("Search")
  }
  const CategoryCard = () => {
    return (
      <View>
        <FlatList
          data={categoryItems}
          numColumns={4} // 4 item dalam 1 baris
          keyExtractor={(item) => item.id}
          contentContainerStyle={styles.flatList}
          renderItem={({ item }) => (
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              
              <Text style={styles.text}>{item.category}</Text>
            </View>
          )}
        />
      </View>
    );
  };

  return (
    <View style={styles.body}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        {/* top content  */}
        <View style={styles.cTop}>
          <View>
            <Image source={User} />
          </View>
          <View>
          <TouchableOpacity onPress={toSearch}>
          <TextInput placeholder='Search item' style={styles.Input} />
            </TouchableOpacity>
          </View>
          <View>
            <Image source={Mess} />
          </View>
        </View>

        {/* category content  */}
        <View>
          <Text style={{ fontWeight: '500', color: '#504B38', marginBottom: 10, marginTop: 20 }}>Category</Text>
          <View>
            <CategoryCard />
          </View>
        </View>

        {/* content product  */}
        <View>
          <Text style={{ fontWeight: '500', color: '#504B38', marginTop: 20 }}>Top Product</Text>
          <ProductCard />
        </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: '#F8F3D9',
    height: '100%',
    padding: 20
  },
  cTop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#'
  },
  Input: {
    backgroundColor: '#EBE5C2',
    width: 250,
    height: 45,
    borderRadius: 25,
    color: '#B9B28A',
    paddingLeft: 20,
    borderWidth: 0,
    borderColor: "#B9B28A"
  },
  flatList: {
    flexGrow: 1,
    justifyContent: "center",
  },
  card: {
    width: 80,
    height: 100,
    backgroundColor: "#ffffff",
    padding: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 5,
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 5,
  },
  text: {
    fontSize: 12,
    textAlign: "center",
    fontWeight: "bold",
    color: '#504B38'
  },
})