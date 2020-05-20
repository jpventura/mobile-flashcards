import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as React from 'react';

import { HomeScreen, LinksScreen } from '../screens';
import TabBarIcon from '../components/TabBarIcon';

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default class BottomTabNavigator extends React.PureComponent {
  render = () => (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}>
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Get Started',
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-code-working" />,
        }}
      />
      <BottomTab.Screen
        name="Links"
        component={LinksScreen}
        options={{
          title: 'Resources',
          // eslint-disable-next-line react/prop-types
          tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name="md-book" />,
        }}
      />
    </BottomTab.Navigator>
  )
}
