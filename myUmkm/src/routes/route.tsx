import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { View, Text, Image } from "react-native";
import HomePage from "../pages/home";
import DetailPage from "../pages/product/detail_product";
import CartPage from "../pages/product/cart";
import SearchPage from "../pages/product/search";

//icon
const homeIcon = require("../../assets/home.png");
const cartIcon = require("../../assets/cart.png");

export type RootStackParamList = {
     Main: undefined;
     Detail: { id: number };
     Search: undefined;
};

//bottom tab navigator
export type BottomTabParamList = {
     Home: undefined;
     Cart: undefined;
};

//Stack dan Tab Navigator
const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<BottomTabParamList>();

//bottom nav
const BottomTabNavigator: React.FC = () => {
     return (
          <Tab.Navigator
               screenOptions={({ route }) => ({
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: { padding: 5, height: 60 },
                    tabBarIcon: ({ focused }) => {
                         let iconSource = route.name === "Home" ? homeIcon : cartIcon;
                         let labelColor = focused ? "#504B38" : "Grey";

                         return (
                              <View style={{ alignItems: "center" }}>
                                   <Image source={iconSource} style={{ width: 24, height: 24 }} />
                                   <Text style={{ fontSize: 12, color: labelColor }}>
                                        {route.name}
                                   </Text>
                              </View>
                         );
                    },
               })}
          >
               <Tab.Screen name="Home" component={HomePage} />
               <Tab.Screen name="Cart" component={CartPage} />
          </Tab.Navigator>
     );
};

//main nav
const AppNavigator: React.FC = () => {
     return (
          <NavigationContainer>
               <Stack.Navigator >
                    <Stack.Screen name="Main" component={BottomTabNavigator} options={{headerShown:false}}/>
                    <Stack.Screen name="Detail" component={DetailPage} options={{headerShown:true}}/>
                    <Stack.Screen name="Search" component={SearchPage} options={{headerShown:false}}/>
               </Stack.Navigator>
          </NavigationContainer>
     );
};

export default AppNavigator;
