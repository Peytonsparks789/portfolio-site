export default [
  {
    path: '/projects',
    name: 'projects',
    component: () => import('../views/ProjectsView.vue'),
    children: [
      {
        path: 'simpleconv', // No leading slash for children paths
        name: 'simpleconv',
        beforeEnter(to, from, next) {
          window.location.href = 'https://simpleconv.com'; // Redirect to external site
        }
      }
    ]
  }
];
