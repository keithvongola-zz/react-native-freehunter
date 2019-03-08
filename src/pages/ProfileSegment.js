import React, { PureComponent } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as DataActions from '../actions/data';

class ProfileSegment extends PureComponent {
  componentDidMount() {
    const { navigation, getProfile } = this.props;
    const count = navigation.getParam('count');

    getProfile(count);
  }

  render() {
    return (
      <View>
        <Text> componentText </Text>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getProfile: count => (dispatch(DataActions.getProfile(count)))
});

export default connect(null, mapDispatchToProps)(ProfileSegment);
