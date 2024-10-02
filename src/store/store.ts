// useThemeStore.js
import { create } from 'zustand';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Appearance } from "react-native";

interface StateProps {
  activeTheme: string;
  setActiveTheme: (value: string) => Promise<void>;
  loadTheme: () => Promise<void>;
  toggleTheme: () => void;
}

const useStore = create<StateProps>((set, get) => ({
  activeTheme: 'light',
  setActiveTheme: async (value: string) => {
    set({ activeTheme: value });
    await AsyncStorage.setItem('activeTheme', value);
  },
  loadTheme: async () => {
    const theme = await AsyncStorage.getItem('activeTheme');
    if (theme) {
      set({ activeTheme: theme });
    } else {
      const systemTheme = Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';
      set({ activeTheme: systemTheme });
      await AsyncStorage.setItem('activeTheme', systemTheme);
    }
  },
  toggleTheme: () => {
    const currentTheme = get().activeTheme;
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    get().setActiveTheme(newTheme);
  }
}));

export default useStore;
