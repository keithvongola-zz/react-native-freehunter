import React, { PureComponent } from 'react';
import {
  SafeAreaView, View, StyleSheet, Text, TextInput, TouchableOpacity
} from 'react-native';
import { metrics, fonts, colors } from '../styles';

const placeholder = 'Profiles Count';
const hints = 'Please specify the number of profiles you want to display';
const buttonNext = 'Next';

export default class ProfileFiltering extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      count: null
    };
    this.onKeyPress = this.onKeyPress.bind(this);
    this.onNextPress = this.onNextPress.bind(this);
  }

  onKeyPress({ nativeEvent }) {
    if (nativeEvent.key === 'Backspace') return;
    this.setState({ count: nativeEvent.key });
    this.textInput.blur();
  }

  onNextPress() {
    const { navigation } = this.props;
    const { count } = this.state;
    if (new RegExp('^[0-9]+$').test(count)) {
      navigation.navigate('ProfileSegment', { count });
    }
  }

  render() {
    const { count } = this.state;

    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <View style={styles.inputContainer}>
            <TextInput
              ref={(ref) => { this.textInput = ref; }}
              clearTextOnFocus
              style={styles.textInput}
              placeholder={placeholder}
              placeholderTextColor={colors.light}
              multiline={false}
              keyboardType="number-pad"
              onKeyPress={this.onKeyPress}
              value={count}
            />
            <Text style={styles.hint}>
              {hints}
            </Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={this.onNextPress}>
            <Text style={styles.next}>
              {buttonNext}
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: metrics.H_PADDING,
    paddingVertical: metrics.V_PADDING,
  },
  inputContainer: {
    flex: 1,
  },
  textInput: {
    height: 40,
    fontSize: fonts.big,
    borderBottomColor: colors.light,
    borderBottomWidth: 1
  },
  hints: {
    marginTop: 8,
    fontSize: fonts.small,
    color: colors.light
  },
  button: {
    alignSelf: 'flex-end',
    backgroundColor: colors.primary,
    paddingHorizontal: metrics.H_PADDING,
    paddingVertical: metrics.V_PADDING,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 8
  },
  next: {
    color: colors.white,
    fontSize: fonts.big,
    fontWeight: fonts.bold,
  }
});
