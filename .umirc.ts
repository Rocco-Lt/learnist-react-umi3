import { defineConfig } from 'umi';
import routers from './router/index';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: routers,
});
