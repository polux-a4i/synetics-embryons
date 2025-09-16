import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';

import { providePrimeNG } from 'primeng/config';
import { Synetics } from './theme';

const serverConfig: ApplicationConfig = {
    providers: [
        provideServerRendering(withRoutes(serverRoutes)),
        providePrimeNG({
            ripple: true,
            theme: {
                preset: Synetics,
                options: {
                    darkModeSelector: false,
                }
            }
        })
    ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
