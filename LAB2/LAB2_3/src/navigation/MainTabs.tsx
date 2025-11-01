import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import type { TabParamList } from "@/types/navigation";
import HomeScreen from "@/screens/HomeScreen";
import CategoryScreen from "@/screens/CategoryScreen";
import FavoriteScreen from "@/screens/FavoriteScreen";
import AccountScreen from "@/screens/AccountScreen";
import { Ionicons } from "@expo/vector-icons";
import ProfileScreen from "@/screens/AccountScreen";

const Tab = createBottomTabNavigator<TabParamList>();

export default function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#3f6fffff",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="grid" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="heart" size={size} color={color} />
          ),
          tabBarBadge: 3, // theo yêu cầu bài
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
