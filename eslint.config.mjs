import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReactConfig from 'eslint-plugin-react/configs/recommended.js';
import { rules } from 'eslint-plugin-react/configs/all';

export default [
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  pluginReactConfig,
  {
    rules: {
      semi: ['error', false],
    },
  },
];
