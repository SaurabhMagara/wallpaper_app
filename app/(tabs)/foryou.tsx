import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Text, View } from 'react-native';

const Tab = createMaterialTopTabNavigator();

export default function foryou () {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Suggested" component={Suggested} />
      <Tab.Screen name="Liked" component={Liked} />
      <Tab.Screen name="Library" component={Library} />
    </Tab.Navigator>
  );
}

function Suggested (){
    return <View>
        <Text>Hello from suggested</Text>
    </View>
}
function Liked (){
    return <View>
        <Text>Hello from Liked</Text>
    </View>
}
function Library (){
    return <View>
        <Text>Hello from Library </Text>
    </View>
}
