import { Text, View, Image, TouchableOpacity } from "react-native";
import { s } from "./ProfilCard.style";
import { FontAwesome } from "@expo/vector-icons";

export default function ProfilCard() {
  return (
    <View style={s.container}>
      <View style={s.header}>
        <view>
          <Image style={s.avatar} scr={{ url: "https://i.pravatar.cc/300" }} />
        </view>
        <view style={s.texts}>
          <Text style={s.name}>Codiku TheDev</Text>
          <Text>Hi I am a React Native dev newbie</Text>
        </view>
      </View>

      <View style={s.social}>
        <TouchableOpacity style="s.socialBtn">
          <FontAwesome name="twitter" size={24} color="#1DA1F2" />
        </TouchableOpacity>
        <TouchableOpacity style="s.socialBtn">
          <FontAwesome name="linkedin-square" size={24} color="#0A66C2" />
        </TouchableOpacity>
        <TouchableOpacity style="s.socialBtn">
          <FontAwesome name="github" size={24} color="#333" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
