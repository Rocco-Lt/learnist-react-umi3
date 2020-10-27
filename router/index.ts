const routers: Array<any> = [
  {
    path: '/',
    component: '@/pages/index',
    exact: true,
  },
  {
    path: '/',
    component: '@/pages//layouts/index',
    reject: '/hook',
    routes: [
      {
        exact: true,
        path: '/hook',
        component: '@/pages/react/hook_content/index',
      },
    ],
  },
];

export default routers;
