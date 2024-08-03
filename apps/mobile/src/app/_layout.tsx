import "../global.css";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index"
          options={{
            headerShown: false,
            drawerLabel: "Home",
          }}
        />
        <Drawer.Screen
          name="about"
          options={{
            drawerLabel: "About",
          }}
        />
        <Drawer.Screen
          name="experience"
          options={{
            drawerLabel: "Experience",
          }}
        />
        <Drawer.Screen
          name="contact"
          options={{
            drawerLabel: "Contact",
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
