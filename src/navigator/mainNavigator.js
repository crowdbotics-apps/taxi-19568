import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile90594Navigator from '../features/UserProfile90594/navigator';
import Maps90575Navigator from '../features/Maps90575/navigator';
import Settings90553Navigator from '../features/Settings90553/navigator';
import Settings90538Navigator from '../features/Settings90538/navigator';
import NotificationList90537Navigator from '../features/NotificationList90537/navigator';
import Maps90536Navigator from '../features/Maps90536/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
UserProfile90594: { screen: UserProfile90594Navigator },
Maps90575: { screen: Maps90575Navigator },
Settings90553: { screen: Settings90553Navigator },
Settings90538: { screen: Settings90538Navigator },
NotificationList90537: { screen: NotificationList90537Navigator },
Maps90536: { screen: Maps90536Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
