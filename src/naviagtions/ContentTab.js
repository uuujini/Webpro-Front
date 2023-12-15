import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ContentRoutes } from './routes';
import HomePage from '../pages/HomePage';

const Tab = createBottomTabNavigator();

const ContentTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}  
      initialRouteName={ContentRoutes.HomePage.name}>
      <Tab.Screen name={ContentRoutes.HomePage.name} component={HomePage}/>
    </Tab.Navigator>
  );
};

export default ContentTab;
