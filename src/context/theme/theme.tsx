import React, {createContext} from 'react';
import {ImageStyle, TextStyle, ViewStyle, useColorScheme} from 'react-native';
export type Theme = {[key: string]: ViewStyle | TextStyle | ImageStyle};

const ThemeContext = createContext<any>({});

const lightTheme = {
  backgroundColor: '#fff',
  textColor: '#000',
};

const darkTheme = {
  backgroundColor: '#000',
  textColor: '#fff',
};

export default function ThemeContent({children}: {children: any}) {
  const colorScheme = useColorScheme();
  return (
    <ThemeContext.Provider
      value={colorScheme === 'dark' ? lightTheme : darkTheme}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => React.useContext(ThemeContext);
