import { createAppContainer, createStackNavigator } from 'react-navigation';
import { ProfileFiltering, ProfileSegment } from '../pages';

const routeConfig = {
  ProfileFiltering: {
    screen: ProfileFiltering,
    navigationOptions: {
      title: 'Profile Filtering',
    },
  },
  ProfileSegment: {
    screen: ProfileSegment,
    navigationOptions: {
      title: 'Profile Segment',
      headerBackTitle: null
    }
  }
};

const AppNavigator = createStackNavigator(routeConfig, {

});

export default createAppContainer(AppNavigator);
