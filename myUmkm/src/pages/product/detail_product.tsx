import React, { useEffect, useState } from "react";
import { View, Text, Image, ActivityIndicator, StyleSheet } from "react-native";
import { RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import axios from "axios";

//definisi tipe untuk navigasi
type RootStackParamList = {
  Detail: { id: number };
};

type DetailPageRouteProp = RouteProp<RootStackParamList, "Detail">;
type DetailPageNavigationProp = StackNavigationProp<RootStackParamList, "Detail">;

interface Props {
  route: DetailPageRouteProp;
  navigation: DetailPageNavigationProp;
}

//type data product
interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  description: string;
  category: string;
}

const DetailPage: React.FC<Props> = ({ route }) => {
  const { id } = route.params;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProductDetail();
  }, []);

  const fetchProductDetail = async () => {
    try {
      const response = await axios.get<Product>(`https://fakestoreapi.com/products/${id}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product detail:", error);
    } finally {
      setLoading(false);
    }
  };


  
  if (loading) {
    return <ActivityIndicator size="large" color="#797C26" />;
  }

  if (!product) {
    return <Text style={styles.errorText}>Produk tidak ditemukan</Text>;
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.category}>Category: {product.category}</Text>
      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  category: {
    fontSize: 14,
    color: "#888",
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: "#E44D26",
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 14,
    textAlign: "center",
    marginTop: 10,
  },
  errorText: {
    fontSize: 16,
    color: "red",
    textAlign: "center",
  },
});

export default DetailPage;
