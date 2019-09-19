import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'todo-mvc-stencil-web-components',
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'docs-json',
      file: 'dist/docs-json.json'
    },
    {
      type: 'docs-readme'
    },
    {
      type: 'docs-vscode',
      file: 'dist/docs-vscode.json'
    }
  ]
};
