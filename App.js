import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './Home';
import DiaryKB from './DiaryKB';
import DiaryBJJ from './DiaryBJJ';
import Entry from './Entry';
import RPCalc from './RPCalc';

/**
 * 
 * Main container to navigate between screens.
 */

const AppNavigator = createStackNavigator({
  Homepage: { screen: Home },
  Kickboxing: { screen: DiaryKB },
  BJJ: { screen: DiaryBJJ },
  Entry: { screen: Entry },
  RPCalc: { screen: RPCalc },

});

const AppContainer = createAppContainer(AppNavigator);

export default function App() {
  return (
    <AppContainer />
  );
}
