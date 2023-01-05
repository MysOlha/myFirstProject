import React from "react";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MainStack = createStackNavigator();
const MainTab = createBottomTabNavigator();

import RegistrationScreen from "./screen/RegistrationScreen";
import LoginScreen from "./screen/LoginScreen";
import PostsScreen from "./screen/HomeScreen/PostsScreen";
import ProfileScreen from "./screen/HomeScreen/ProfileScreen";
import CreatePostsScreen from "./screen/HomeScreen/CreatePostsScreen";

import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export const useRoute = (authUser) => {
  const exitFromProfile = () => (
    <Ionicons name="exit-outline" size={30} color="#BDBDBD" />
  );

  if (authUser) {
    return (
      <MainTab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
        }}
      >
        <MainTab.Screen
          name="Posts"
          component={PostsScreen}
          options={{
            title: "Публікації",
            tabBarIcon: ({}) => (
              <AntDesign name="appstore-o" size={24} color="#212121" />
            ),
            headerRight: exitFromProfile,
          }}
        />
        <MainTab.Screen
          name="CreatePosts"
          component={CreatePostsScreen}
          options={{
            title: "Створити публікацію",
            tabBarIcon: ({}) => (
              <AntDesign name="plus" size={26} color="#212121" />
            ),
            headerRight: exitFromProfile,
          }}
        />
        <MainTab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            title: "Профіль",
            tabBarIcon: ({}) => (
              <Feather name="user" size={24} color="#212121" />
            ),
            headerRight: exitFromProfile,
          }}
        />
      </MainTab.Navigator>
    );
  }
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name="Registration"
        component={RegistrationScreen}
        options={{ headerShown: false }}
      />
      <MainStack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
    </MainStack.Navigator>
  );
};
