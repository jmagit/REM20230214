import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { angularOutputTarget, ValueAccessorConfig } from '@stencil/angular-output-target';
const angularValueAccessorBindings: ValueAccessorConfig[] = [{
  elementSelectors: ['jma-calculadora'],
  event: 'updated',
  targetAttr: 'value',
  type: 'number', // 'text' | 'radio' | 'select' | 'number' | 'boolean';
}];

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
    angularOutputTarget({
      componentCorePackage: 'jma-calculadora/dist/types',
      directivesProxyFile: '../cliente-angular-mod/src/lib/jma-calculadora/src/components.ts',
      directivesArrayFile: '../cliente-angular-mod/src/lib/jma-calculadora/src/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),
    angularOutputTarget({
      componentCorePackage: 'jma-calculadora/dist/types',
      directivesProxyFile: '../jma-calculadora-workspace/projects/jma-calculadora-angular/src/lib/src/components.ts',
      directivesArrayFile: '../jma-calculadora-workspace/projects/jma-calculadora-angular/src/lib/src/index.ts',
      valueAccessorConfigs: angularValueAccessorBindings,
    }),

  ],
  plugins: [
    sass()
  ],
};
