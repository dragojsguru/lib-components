import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target';


export const config: Config = {
  namespace: 'components',
  outputTargets: [
    reactOutputTarget({
      componentCorePackage: '@jsguru/components',
      proxiesFile: '../components-react/src/components.ts',
      includeDefineCustomElements: true
    }),
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
