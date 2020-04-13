import define from './define'
export default function(routes, resolve) {
  const { Home } = define(resolve)
  return routes.push(Home)
}
