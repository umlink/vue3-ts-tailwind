import jsCookie from 'js-cookie'
import { TOKEN_KEY } from '@/constants/global-config-enums'
import type { RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
const routerBeforeEach = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
) => {
  const token = jsCookie.get(TOKEN_KEY)
  console.log('before-each token:', token)
  next()
}

export default routerBeforeEach
