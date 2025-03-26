import React, { useEffect, useState } from "react";
import { View, Text, Image, FlatList, TouchableOpacity, ActivityIndicator, StyleSheet } from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import SkeletonLoader from "./skeleton";

type RootStackParamList = {
     Home: undefined;
     Detail: { id: number };
};

type NavigationProps = StackNavigationProp<RootStackParamList, "Home">;

interface Product {
     id: number;
     title: string;
     image: string;
     price: number;
}

const ProductCard: React.FC = () => {
     const navigation = useNavigation<NavigationProps>();
     const [products, setProducts] = useState<Product[]>([]);
     const [loading, setLoading] = useState<boolean>(true);

     useEffect(() => {
          fetchProducts();
     }, []);

     const fetchProducts = async () => {
          try {
               const response = await axios.get<Product[]>("https://fakestoreapi.com/products");
               setProducts(response.data);
          } catch (error) {
               console.error("Error fetching products:", error);
          } finally {
               setLoading(false);
          }
     };

     return (
          <View style={styles.container}>
               {loading ? (
                    <FlatList
                         data={Array(6).fill({})}
                         numColumns={2}
                         keyExtractor={(_, index) => index.toString()}
                         renderItem={() => (
                              <View style={styles.card}>
                                   <SkeletonLoader width={100} height={100} />
                                   <SkeletonLoader width={120} height={15} />
                                   <SkeletonLoader width={80} height={15} />
                              </View>
                         )}
                    />
               ) : (
                    <FlatList
                         data={products}
                         numColumns={2}
                         keyExtractor={(item) => item.id.toString()}
                         contentContainerStyle={styles.flatList}
                         renderItem={({ item }) => (
                              <TouchableOpacity
                                   style={styles.card}
                                   onPress={() => navigation.navigate("Detail", { id: item.id })}
                              >
                                   <Image source={{ uri: item.image }} style={styles.image} />
                                   <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
                                   <View style={styles.infoContainer}>
                                        <Text style={styles.text}>Sold: {Math.floor(Math.random() * 1000)}</Text>
                                        <Text style={styles.price}>${item.price.toFixed(2)}</Text>
                                   </View>
                              </TouchableOpacity>
                         )}
                    />
               )}
          </View>
     );
};

const styles = StyleSheet.create({
     container: {
          flex: 1,
          padding: 10,
     },
     flatList: {
          paddingBottom: 10,
     },
     card: {
          flex: 1,
          margin: 8,
          backgroundColor: "#fff",
          padding: 10,
          borderRadius: 10,
          alignItems: "center",
          elevation: 3,
     },
     image: {
          width: 100,
          height: 100,
          resizeMode: "contain",
     },
     title: {
          fontSize: 14,
          fontWeight: "bold",
          textAlign: "center",
          marginVertical: 5,
     },
     infoContainer: {
          flexDirection: "row",
          justifyContent: "space-between",
          width: "100%",
          paddingHorizontal: 10,
     },
     text: {
          fontSize: 12,
          color: "#555",
     },
     price: {
          fontSize: 14,
          fontWeight: "bold",
          color: "#E44D26",
     },
});

export default ProductCard;
