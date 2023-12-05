import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { ContentRoutes } from './routes';
const Tab = createBottomTabNavigator();

const getTabBarIcon = ({ focused, color, size, name }) => {
  const iconName = focused ? name : `${name}-outline`;
  return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
};

const ContentTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        // tabBarActiveTintColor: PRIMARY.DARK,
        // tabBarInactiveTintColor: GRAY.DARK,
      }}
      initialRouteName={ContentRoutes.HomePage.name}
    >
      <Tab.Screen
        name={ContentRoutes.HomePage.name}
        // component={CreateWordScreen}
        // options={{
        //   tabBarIcon: (props) => getTabBarIcon({ ...props, name: 'book' }),
        //   tabBarLabel: ContentRoutes.CreateWord.label,
        //   unmountOnBlur: true,}}
      />
    </Tab.Navigator>
  );
};

export default ContentTab;
