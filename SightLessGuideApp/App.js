import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Objectdetection from './components/Objectdetection';
import TextScanner from './components/TextScanner';
import EmergencyCall from './components/Emergencycall';
import Registration from './components/Registration';
import Startup from './components/Startup';
import Navigation from './components/Navigation';
import Currencydetection from './components/FakeCurrency';
import AppStart from './components/AppStart';
import Instructions from './components/Instruction';
import LocationWeather from './components/LocationWeather';
import useAuth from './components/useAuth';

const Stack = createNativeStackNavigator();

function App() {
  const [initialRoute, setInitialRoute] = React.useState(null);
  const { isLoggedIn } = useAuth();
  React.useEffect(() => {
    if (isLoggedIn) {
      console.log("User is logged in");
      setInitialRoute("Objectdetection");
    } else if (isLoggedIn === false) {
      setInitialRoute("startingApp");
    }
  }, [isLoggedIn]);
  
  if (initialRoute === null) {
    // Render a loading screen or nothing while determining the initial route
    return null;
  }
  console.log("Initial route is", initialRoute);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}>

        <Stack.Screen name="startingApp" component={AppStart} />
        <Stack.Screen name="Objectdetection" component={Objectdetection} />

        <Stack.Screen name="Instruction" component={Instructions} />
        <Stack.Screen name="Start" component={Startup} />
        <Stack.Screen name="Registration" component={Registration} />
        <Stack.Screen name="Textscanner" component={TextScanner} />
        <Stack.Screen name="currency" component={Currencydetection} />
        <Stack.Screen name="Emergencycontact" component={EmergencyCall} />
        <Stack.Screen name="Navigation" component={Navigation} />
        <Stack.Screen name="LocationWeather" component={LocationWeather} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
