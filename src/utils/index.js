export const buildRoutes = routes => {
  const routeList = []
  routes.map(e => routeList.push({ title: e.title, icon: e.icon, path: e.path }))
  return routeList
}
