//mypreset.ts
import { definePreset } from '@primeuix/themes';
import Aura from '@primeuix/themes/aura';

export const Synetics = definePreset(Aura, {
    semantic: {
        'cyan': {
            DEFAULT: '#004F71',
            50: '#F1FBFF',
            100: '#D7F3FF',
            200: '#A4E4FF',
            300: '#71D4FF',
            400: '#3EC5FF',
            500: '#0BB6FF',
            600: '#0096D7',
            700: '#0073A4',
            800: '#004F71',
            900: '#002B3E',
            950: '#001A25'
        },
        primary: {
            50: '{cyan.50}',
            100: '{cyan.100}',
            200: '{cyan.200}',
            300: '{cyan.300}',
            400: '{cyan.400}',
            500: '{cyan.500}',
            600: '{cyan.600}',
            700: '{cyan.700}',
            800: '{cyan.800}',
            900: '{cyan.900}',
            950: '{cyan.950}'
        },
    },
    components: {
        button: {
            root: {
                borderRadius: '1rem 0 1rem 0'
            },
            colorScheme: {
                light: {
                    root: {
                        primary: {
                            background: '{primary.800}',
                            borderColor: '{primary.800}',
                            focusRing: {
                                color: '{primary.800}'
                            },
                        },
                    },
                    outlined: {
                        primary: {
                            borderColor: '{primary.800}',
                            color: '{primary.800}',
                            activeBackground: 'transparent',
                            hoverBackground: '{primary.100}'
                        },
                        secondary: {
                            borderColor: '{surface.0}',
                            color: '{surface.0}',
                            activeBackground: 'transparent',
                            hoverBackground: '{primary.700}',
                        }
                    }
                }
            },
            extend: {
                accent: {
                    color: '#f59e0b',
                    inverseColor: '#ffffff'
                }
            },
            css: ({ dt }) => `
                .p-button-accent {
                    background: ${dt('button.accent.color')};
                    color: ${dt('button.accent.inverse.color')};
                    transition-duration: ${dt('my.transition.fast')};
                }
            `
        },
        card: {
            root: {
                borderRadius: '3rem 1rem 3rem 1rem',
                shadow: '0'
            },
            body: {
                padding: '3rem 1.5rem',
            },
            colorScheme: {
                light: {
                    root: {
                        color: '{primary.800}'
                    }
                }
            }
        },
        inputtext: {
            colorScheme: {
                light: {
                    root: {
                        placeholderColor: '{primary.800}',
                        background: '{slate.100}',
                        borderColor: '{slate.100}',
                        borderRadius: '.5rem'
                    }
                }
            }
        },
        select: {
            colorScheme: {
                light: {
                    root: {
                        background: '{slate.100}',
                        borderColor: '{slate.100}',
                        borderRadius: '.5rem'
                    },
                    option: {
                        color: '{primary.800}',
                        selectedColor: '{primary.800}'
                    },
                    dropdown: {
                        color: '{primary.800}'
                    }
                }
            },
            css: () => `
                .p-select {
                    width: 100%;
                    height: 100%;
                }
            `
        },
        autocomplete: {
            css: () => `
                .p-autocomplete {
                    width: 100%;
                }
            `
        },
        datepicker: {
            inputIcon: {
                color: '{primary.800}'
            },
            css: () => `
                .p-datepicker {
                    width: 100%;
                }
            `
        },
        floatlabel: {
            colorScheme: {
                light: {
                    root: {
                        color: '{primary.800}'
                    }
                }
            }
        },
        tabs: {
            activeBar: {
                background: 'transparent'
            },
            tablist: {
                background: "transparent",
                borderColor: "transparent"
            },
            tab: {
                background: '{surface.0}',
                activeColor: '{primary.600}',
                activeBackground: '{surface.0}',
                hoverColor: '{primary.600}',
                hoverBackground: '{surface.0}'
            },
            tabpanel: {
                padding: '1.6rem',
                color: '{primary.800}',
            },
            css: () => `
                .p-tabs {
                    display: grid;
                    grid-template-columns: auto 1fr;
                    gap: .5rem;
                }
                .p-tablist-tab-list {
                    flex-flow: column;
                    width: fit-content;
                    gap: .5rem;
                }
                .p-tabpanels {
                    border-radius: 0 3rem 0 0;
                }
                .p-tab {
                    border-radius: .5rem 0 0 .5rem;
                }
            `
        }
    }
});
