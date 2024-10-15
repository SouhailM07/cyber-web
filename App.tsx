import { View, Text } from "react-native";
import { PaperProvider } from "react-native-paper";
import tw from "./lib/tailwind";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const Home = () => (
  <View style={tw`bg-green-500 h-full items-center justify-center`}>
    <Text>Home</Text>
  </View>
);
