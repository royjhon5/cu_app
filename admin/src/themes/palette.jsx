export const navColors = (appSettings) => ({
    ...(appSettings.paletteMode === "dark" ? {
        ...(appSettings.navColor === "blend-in" ? {
            ...(appSettings.contrast === "default" ? {
                navcolor: {
                    100: "#161C24"
                }
            }:{
                navcolor: {
                    100: '#161C24'
                }
            }),
        } : appSettings.navColor === "discrete" ? {
            navcolor: {
                100: "#111927"
            }
        } : {
            navcolor: {
                100: "#1C2536"
            }
        })
    }:{
        ...(appSettings.navColor === "blend-in" ? {
            ...(appSettings.contrast === "default" ? {
                navcolor: {
                    100: "#FFFFFF"
                }
            }:{
                navcolor: {
                    100: '#F4F6F8'
                }
            })
        } : appSettings.navColor === "discrete" ? {
            navcolor: {
                100: "#F8F9FA"
            }
        } : {
            navcolor: {
                100: "#1C2536"
            }
        }),
    })
}); 


export const tokens = (appSettings) => ({
    ...(appSettings.paletteMode === "dark" 
        ? {
            black: {
            100: "#cecfd1",
            200: "#9d9fa3",
            300: "#6d6f75",
            400: "#3c3f47",
            500: "#0b0f19",
            600: "#090c14",
            700: "#07090f",
            800: "#04060a",
            900: "#020305"
            },
            green: {
            100: "#d0f0e0",
            200: "#a2e1c1",
            300: "#73d1a2",
            400: "#45c283",
            500: "#16b364",
            600: "#128f50",
            700: "#0d6b3c",
            800: "#094828",
            900: "#042414"
            },
            blue: {
            100: "#d4e2ff",
            200: "#a9c6ff",
            300: "#7fa9ff",
            400: "#548dff",
            500: "#2970ff",
            600: "#215acc",
            700: "#194399",
            800: "#102d66",
            900: "#081633"
            },
            indigo: {
            100: "#e0e0fc",
            200: "#c1c2f9",
            300: "#a1a3f7",
            400: "#8285f4",
            500: "#6366f1",
            600: "#4f52c1",
            700: "#3b3d91",
            800: "#282960",
            900: "#141430"
            },
            purple: {
            100: "#ece4fb",
            200: "#d8c9f8",
            300: "#c5adf4",
            400: "#b192f1",
            500: "#9e77ed",
            600: "#7e5fbe",
            700: "#5f478e",
            800: "#3f305f",
            900: "#20182f"
            },
            cards: {
            200: 'rgba(17, 25, 39, 0.63)',
            300: '#99A0AB',
            400: '#151822',
            500: "#111927",
            600: '#1C2536',
            700: '#4D5761',
            800: '#2d3748',
            900: '#2F3746',
            },
            loadingColor: {
            100: '#f2f4f7',
            },
            motion: {
            100: "#fff"
            },
            sidebarColor: {
               100: "#161C24",
               200: 'rgba(145, 158, 171, 0.2)'
            },
            buttonColor: {
               100: 'rgb(33, 43, 54)'
            }
    } : {
            black: {
            100: "#020305",
            200: "#04060a",
            300: "#07090f",
            400: "#090c14",
            500: "#0b0f19",
            600: "#3c3f47",
            700: "#6d6f75",
            800: "#9d9fa3",
            900: "#cecfd1"
            },
            green: {
            100: "#042414",
            200: "#094828",
            300: "#0d6b3c",
            400: "#128f50",
            500: "#16b364",
            600: "#45c283",
            700: "#73d1a2",
            800: "#a2e1c1",
            900: "#d0f0e0"
            },
            blue: {
            100: "#081633",
            200: "#102d66",
            300: "#194399",
            400: "#215acc",
            500: "#2970ff",
            600: "#548dff",
            700: "#7fa9ff",
            800: "#a9c6ff",
            900: "#d4e2ff"
            },
            indigo: {
            100: "#141430",
            200: "#282960",
            300: "#3b3d91",
            400: "#4f52c1",
            500: "#6366f1",
            600: "#8285f4",
            700: "#a1a3f7",
            800: "#c1c2f9",
            900: "#e0e0fc"
            },
            purple: {
            100: "#20182f",
            200: "#3f305f",
            300: "#5f478e",
            400: "#7e5fbe",
            500: "#9e77ed",
            600: "#b192f1",
            700: "#c5adf4",
            800: "#d8c9f8",
            900: "#ece4fb",
            },
            cards: {
            200: 'rgba(255, 255, 255, 0.63)',
            300: '#6C737F',
            400: '#F8F9FA',
            500: "#FFFFFF",
            600: "#F8F9FA",
            700: "#D2D6DB",
            800: '#f2f4f7',
            900: '#F3F4F6'
            },
            loadingColor: {
            100: '#2d3748',
            },
            motion: {
            100: "#000"
            },
            sidebarColor: {
                100: "#FFFFFF",
                200: 'rgba(145, 158, 171, 0.2)'
            },
            buttonColor: {
                100: 'rgb(255, 255, 255)'
            }
    }),
});

export const SvgIconColors = (appSettings) => ({
    ...(appSettings.colorPreset === 'dark-green' ? {
        svgcolor: {
            100: "#00A76F",
        }
    } : appSettings.colorPreset === 'light-blue' ? {
        svgcolor: {
            100: "#078DEE",
        }
    } : appSettings.colorPreset === 'dark-purple' ? {
        svgcolor: {
            100: "#7635DC",
        }
    } : appSettings.colorPreset === "dark-blue" ? {
        svgcolor: {
            100: "#2065D1",
        }
    } : appSettings.colorPreset === "light-orange" ? {
        svgcolor: {
            100: "#FDA92D",
        }
    } : {
        svgcolor: {
            100: "#FF3030",
        }
    })
});


export const BoxShadowBtnSettings = (appSettings) => ({
    ...(appSettings.paletteMode === "dark" ? {
        ...(appSettings.contrast === 'default' ? {
            btnShadow: {
                100: 'rgba(0, 0, 0, 0.08) -24px 8px 24px -4px'
            }
        } : {
            btnShadow: {
                100: 'rgba(0, 0, 0, 0.08) -24px 8px 24px -4px'
            }
        })
    }:{
        ...(appSettings.contrast === 'default' ? {
            btnShadow: { 
                100: 'rgba(145, 158, 171, 0.08) -24px 8px 24px -4px'
            }
        } : {
            btnShadow: {
                100: 'rgba(145, 158, 171, 0.08) -24px 8px 24px -4px'
            }
        })
    })
}); 


export const TopNavColor = (appSettings) => ({
    ...(appSettings.paletteMode === "dark" ? {
        ...(appSettings.contrast === 'default' ? {
            TopNavColors: {
                100: 'rgba(22, 28, 36, 0.8)'
            }
        } : {
            TopNavColors: {
                100: 'rgba(22, 28, 36, 0.8)'
            }
        })
    }:{
        ...(appSettings.contrast === 'default' ? {
            TopNavColors: { 
                100: 'rgba(255, 255, 255, 0.8)'
            }
        } : {
            TopNavColors: {
                100: 'rgba(244, 246, 248, 0.8)'
            }
        })
    })
});