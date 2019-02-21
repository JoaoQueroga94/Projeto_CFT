/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/dashboard',
    // Relative to /src/views
    view: 'Dashboard'
  },
  {
    path: '/login',
    name: 'Login',
    view: 'Login'
  },
  {
    path: '/list',
    name: 'Compras',
    view: 'List'
  },
  {
    path: '/imprimir',
    name: 'Cumpom',
    view: 'Imprimir'
  }
]
