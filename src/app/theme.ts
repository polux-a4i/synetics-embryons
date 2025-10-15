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
                borderRadius: '1rem 0 1rem 0',
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
                        contrast: {
                            background: '{primary.900}',
                            borderColor: '{primary.900}',
                            focusRing: {
                                color: '{primary.900}'
                            },
                        }
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
                }
                .p-button-text {
                    border-radius: .5rem;
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
                        color: '{primary.800}',
                        placeholderColor: '{slate.500}',
                        background: '{slate.100}',
                        borderColor: '{slate.100}',
                        borderRadius: '.5rem'
                    }
                }
            }
        },
        inputnumber: {
            colorScheme: {
                light: {
                    button: {
                        background: '{slate.100}',
                        borderColor: '{slate.100}',
                        hoverBackground: '{slate.200}',
                        hoverBorderColor: '{slate.200}'
                    }
                }
            },
            css: ({ dt }) => `
                .p-inputnumber-button > * {
                    border-radius: 3px;
                    font-size: .8em;
                    padding: .2rem;
                    color: ${dt('surface.0')};
                    background: ${dt('primary.800')};
                    margin: -3px;
                }
            `
        },
        textarea: {
            colorScheme: {
                light: {
                    root: {
                        paddingX: "1rem",
                        paddingY: "1rem",
                        placeholderColor: '{primary.800}',
                        background: '{slate.100}',
                        borderColor: '{slate.100}',
                        borderRadius: '.5rem'
                    }
                }
            },
            css: () => `
                .p-textarea {
                    width: 100%;
                }
            `
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
        checkbox: {
            css: () => `
                .p-checkbox {
                    vertical-align: text-top;
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
                        positionY: ".75rem",
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
            }
        },
        popover: {
            content: {
                padding: '.5rem'
            }
        },
        dialog: {
            colorScheme: {
                light: {
                    root: {
                        color: '{primary.800}'
                    }
                }
            }
        },
        datatable: {
            colorScheme: {
                light: {
                    header: {
                        background: '{surface.0}',
                    },
                    headerCell: {
                        background: '{primary.800}',
                        color: '{surface.0}'
                    },
                    columnTitle: {
                        fontWeight: 'bold'
                    }
                }
            },
            css: () => `
                .p-datatable-scrollable td.p-datatable-frozen-column {
                    background-color: var(--p-datatable-row-background);
                }
            `
        }
    }
});
