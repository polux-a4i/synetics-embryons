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
                            }
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
            }
        }
    }
});
