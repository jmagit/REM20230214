import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'jma-calculadora',
  outputTargets: [
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
    { type: 'docs-json', file: 'docs/docs.json', },
    { type: 'docs-vscode', file: 'vscode-data.json', },
  ],
  plugins: [
    sass()
  ],
};
