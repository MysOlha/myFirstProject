import React from "react";
import { moduleName } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import DefaultScreenPosts from "./NestedScren/DefaultScreen";
import CommentsScreen from "./NestedScren/CommentsScreen";
import MapScreen from "./NestedScren/MapScreen";

const NestedScreen = createStackNavigator();

const PostsScreen = () => {
  return (
    <NestedScreen.Navigator>
      <NestedScreen.Screen
        name="DefaultScreen"
        component={DefaultScreenPosts}
        options={{
          title: "Публікації",
        }}
      />
      <NestedScreen.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={{
          title: "Коментарі",
        }}
      />
      <NestedScreen.Screen
        name="MapScreen"
        component={MapScreen}
        options={{
          title: "Карта",
        }}
      />
    </NestedScreen.Navigator>
  );
};

export default PostsScreen;
