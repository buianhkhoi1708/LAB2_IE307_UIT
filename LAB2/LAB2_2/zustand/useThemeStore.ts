import {create} from 'zustand';


interface Darkmode {
    isDark: boolean;
    toggleTheme: () => void;
}


export const useThemeStore = create<Darkmode>()((set) => ({
    isDark: false,
    toggleTheme: () => set((state) => ({
        isDark: !state.isDark
    })),
}))