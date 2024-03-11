import { Text, View } from "react-native";
import { Profil } from "./components/Profil/Profil";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import s from "./app.style";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <view style={s.box1}></view>
        <view style={s.box2}></view>
        <view style={s.box3}></view>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
