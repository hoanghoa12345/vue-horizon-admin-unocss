import NProgress from 'nprogress'
import type { Router } from 'vue-router'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

export const install = (router: Router) => {
  router.beforeEach((to, from) => {
    if (to.path !== from.path) NProgress.start()
  })
  router.afterEach(() => {
    NProgress.done()
  })
}
