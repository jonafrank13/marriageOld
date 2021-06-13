
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/about', component: () => import('pages/About.vue') },
      { path: '/venue', component: () => import('pages/Venue.vue') },
      { path: '/contact', component: () => import('pages/Contact.vue') },
      { path: '/stream', component: () => import('pages/Stream.vue') },
      { path: '/gallery', component: () => import('pages/Gallery.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
