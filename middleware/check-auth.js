export default function ({ store }) {
  // console.log('[Middleware] check auth')
  if (process.client) {
    store.dispatch('initAuth', null)
  }
}
