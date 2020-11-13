
const routes = [
  {
    path: '/',
    icon: 'home',
    title: 'Home',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/producao',
    icon: 'add_box',
    title: 'Produção',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Producao.vue') }
    ]
  },
  {
    path: '/recebimento',
    icon: 'assignment',
    title: 'Recebimento',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/relatorio',
    icon: 'assessment',
    title: 'Relatório',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Relatorio.vue') }
    ]
  },
  {
    path: '/agendamento',
    icon: 'receipt',
    title: 'Agendamento',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/calculadora',
    icon: 'smartphone',
    title: 'Calculadora',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/perfil',
    icon: 'account_box',
    title: 'Perfil',
    component: () => import('layouts/Layout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  }

  // Always leave this as last one,
  // but you can also remove it
  // {
  //   path: '*',
  //   component: () => import('pages/Error404.vue')
  // }
]

export default routes
