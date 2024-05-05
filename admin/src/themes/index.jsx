import { createContext, useEffect, useMemo, useState } from "react";
import themeTypography from "./typography";
import { createTheme } from "@mui/material/styles";

export const ThemeSettings = (appSettings) => {
    return {
        palette: {
            appSettings: appSettings,
            ...(appSettings.paletteMode === "dark" 
            ? { 
                 mode: 'dark', 
                ...(appSettings.colorPreset === "green" ? {
                    primary: { main: "#16b364" }
                } : appSettings.colorPreset === "blue" ? {
                    primary: { main: "#2970ff" }
                } : appSettings.colorPreset === "indigo" ? {
                    primary: { main: "#6366f1" }
                } : appSettings.colorPreset === "purple" ? {
                    primary: { main: '#9e77ed' }
                } : appSettings.colorPreset === "gold" ? {
                    primary: { main: '#FFD700' }
                } : {
                    primary: { main: '#7A0000' }
                }),
                ...(appSettings.contrast === "normal" ? {
                    background: { default: "#161C24" },
                } : {
                    background: { default: "#161C24" },
                }),
            }
            :
            {
                mode: 'light', 
                ...(appSettings.colorPreset === "green" ? {
                    primary: {
                        main: "#16b364"
                    }
                } : appSettings.colorPreset === "blue" ? {
                    primary: {
                        main: "#2970ff"
                    }
                } : appSettings.colorPreset === "indigo" ? {
                    primary: {
                        main: "#6366f1"
                    }
                } : appSettings.colorPreset === "purple" ? {
                    primary: {
                        main: '#9e77ed'
                    }
                } : appSettings.colorPreset === "gold" ? {
                    primary: {
                        main: '#FFD700'
                    }
                } : {
                    primary: {
                        main: '#7A0000'
                    }
                }),
                ...(appSettings.contrast === "normal" ? {
                    background: {
                        default: "#FFFFFF",
                    },
                } : {
                    background: {
                        default: "#F8F9FA",
                    },
                }),
            })
        },
        typography: themeTypography(appSettings)
    };
};

export const AppSettingsContext = createContext({
    //Color Preset
    toggleGreen: () => {},
    toggleBlue: () => {},
    toggleIndigo: () => {},
    togglePurple: () => {},
    toggleGold: () => {},
    toggleMaroon: () => {},
    //contrast
    toggleNormal: () => {},
    toggleHigh: () => {},
    //layout
    toggleVertical: () => {},
    toggleHorizontal: () => {},
    //nav bar Colors
    toggleBlendin: () => {},
    toggleDiscrete: () => {},
    toggleEvident: () => {},
    //palette Mode
    toggleLightMode: () => {},
    toggleDarkMode: () => {},
    //stretch
    toggleCompact: () => {},
    toggleWide: () => {},
});

export const UseMode = () => {
    const colors = JSON.parse(localStorage.getItem("app.settings")) || 'green';
    const appContrasts = JSON.parse(localStorage.getItem("app.settings")) || 'normal';
    const appLayout = JSON.parse(localStorage.getItem("app.settings")) || 'horizontal';
    const navColors = JSON.parse(localStorage.getItem("app.settings")) || 'blend-in';
    const palettes = JSON.parse(localStorage.getItem("app.settings")) || 'dark';
    const appContent = JSON.parse(localStorage.getItem("app.settings")) || 'true';
    const [appSettings, setAppSettings] = useState({
        colorPreset: colors.colorPreset || 'green',
        contrast: appContrasts.contrast || 'normal',
        layout: appLayout.layout || 'horizontal',
        navColor: navColors.navColor || 'blend-in',
        paletteMode: palettes.paletteMode || 'dark',
        stretch: appContent.stretch || 'true'
    });


    const appMode = useMemo(
        () => ({
            //Color Preset
            toggleGreen: () => setAppSettings({ ...appSettings, colorPreset: 'green' }),
            toggleBlue: () => setAppSettings({ ...appSettings, colorPreset: 'blue' }),
            toggleIndigo: () => setAppSettings({ ...appSettings, colorPreset: 'indigo' }),
            togglePurple: () => setAppSettings({ ...appSettings, colorPreset: 'purple' }),
            toggleGold: () => setAppSettings({ ...appSettings, colorPreset: 'gold' }),
            toggleMaroon: () => setAppSettings({ ...appSettings, colorPreset: 'maroon' }),
            //contrast 
            toggleNormal: () => setAppSettings({ ...appSettings, contrast: 'normal' }),
            toggleHigh: () => setAppSettings({ ...appSettings, contrast: 'high' }),
            //layout
            toggleVertical: () => setAppSettings({ ...appSettings, layout: 'vertical' }),
            toggleHorizontal: () => setAppSettings({ ...appSettings, layout: 'horizontal' }),
            //Nav Bar Color
            toggleBlendin: () => setAppSettings({ ...appSettings, navColor: 'blend-in' }),
            toggleDiscrete: () => setAppSettings({ ...appSettings, navColor: 'discrete' }),
            toggleEvident: () => setAppSettings({ ...appSettings, navColor: 'evident' }),
            //palette Mode
            toggleLightMode: () => setAppSettings({ ...appSettings, paletteMode: 'light' }),
            toggleDarkMode: () => setAppSettings({ ...appSettings, paletteMode: 'dark' }),
            //stretch
            toggleCompact: () => setAppSettings({ ...appSettings, stretch: 'true' }),
            toggleWide: () => setAppSettings({ ...appSettings, stretch: 'false' }),
            appSettings,
        }),
        [appSettings]
    );

    useEffect(() => {
        localStorage.setItem("app.settings", JSON.stringify(appSettings));
    }, [appSettings]);



    const theme = useMemo(() => createTheme(ThemeSettings(appSettings)), [appSettings]);
    return [theme, appMode];

}
