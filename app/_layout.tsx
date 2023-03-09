import { Slot } from "expo-router";
import Nav from "../components/UI/Nav";
import { SafeAreaView } from "react-native-safe-area-context";

const Layout = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Nav />
      <Slot />
    </SafeAreaView>
  );
};

export default Layout;
