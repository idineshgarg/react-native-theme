/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import ThemeContent, {useTheme} from './src/context/theme/theme';

function App(): JSX.Element {
  return (
    <ThemeContent>
      <SafeAreaView>
        <Child />
      </SafeAreaView>
    </ThemeContent>
  );
}

function Child(): JSX.Element {
  const theme = useTheme();
  const style = stylesHandler(theme);
  return <Text style={style.wrapper}>Hello</Text>;
}

const stylesHandler = (theme: any) =>
  StyleSheet.create({
    wrapper: {
      backgroundColor: theme.backgroundColor,
      color: theme.textColor,
    },
  });

export default App;
