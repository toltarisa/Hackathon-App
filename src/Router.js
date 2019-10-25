import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {createStackNavigator} from 'react-navigation-stack';
import Checkpoint from './screens/Checkpoint';
import CreateBag from './screens/CreateBag';
import FamilyStatus from './screens/FamilyStatus';
import DrawerMenu from './components/DrawerMenu';

const ModalStack = createStackNavigator(
  {
    Checkpoint: {
      screen: Checkpoint,
    },
    CreateBag: {
      screen: CreateBag,
    },
    FamilyStatus: {
      screen: FamilyStatus,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
  },
);

const DrawerNavigator = createDrawerNavigator(
  {
    ModalStack: {
      screen: ModalStack,
    },
  },
  {
    contentComponent: DrawerMenu,
  },
);

export default createAppContainer(DrawerNavigator);
