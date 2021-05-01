import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../../components/RoundedButton';
import { fontSizes, spacing } from '../../utils/Sizes.js';
import { colors } from '../../utils/colors';
const { width, height } = Dimensions.get('window');
export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={(styles.container, { width: 300, height: 450 })}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}> What would you like to focus on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: spacing.md }}
            onSubmitEditing={({ nativeEvent }) => {
              setSubject(nativeEvent.text);
            }}
          />
          <RoundedButton
            size={60}
            title="+"
            onPress={() => {
              addSubject(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    backgroundColor: 'blue',
    width: width,
    height: height,
  },
  innerContainer: {
    flex: 1,
    padding: spacing.sm,
    justifyContent: 'center',
  },
  title: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: fontSizes.md,
  },
  inputContainer: {
    paddingTop: spacing.sm,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
