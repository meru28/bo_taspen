export default function ({ store, redirect }) {
  // console.log('[Middleware] auth')
  if (!store.getters.isAuthenticated) {
    return redirect('/login')
  }
}
