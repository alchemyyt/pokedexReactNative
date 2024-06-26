import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import FavoritosScreen from "./screens/Favoritos";
import AccountScreen from "./screens/Account";
import PokedexScreen from "./screens/Pokedex";
const Tab = createBottomTabNavigator();
const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Favoritos" component={FavoritosScreen} />
      <Tab.Screen name="Account" component={AccountScreen} />
      <Tab.Screen name="Pokedex" component={PokedexScreen} />
    </Tab.Navigator>
  );
};

export default Navigation;
