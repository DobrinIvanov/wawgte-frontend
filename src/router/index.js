import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: () => import('@/views/main/HomePage.vue'),
      children: [
        { path: '', component: () => import('@/views/main/ButtonPage.vue') },
        { path: '/about', component: () => import('@/views/main/AboutPage.vue') },
        { path: '/sign-up', component: () => import('@/views/form/SignUpPage.vue')},
        { path: '/login', component: () => import('@/views/form/LoginPage.vue')},
        { path: '/all-recipes' , component: ()=> import('@/views/recipes/RecipesList.vue')},
        { path: '/recipe', component: ()=> import('@/views/recipes/SingleRecipeList.vue')},
        { path: '/all-cookbooks', component: ()=> import('@/views/cookbooks/CookbooksList.vue')},
        { path: '/cookbook', component: ()=> import('@/views/cookbooks/SingleCookbookList.vue')},
        { path: '/add-recipe', component: ()=> import('@/views/recipes/AddRecipe.vue')},       
      ]
    },
    // {
    //   path: '/auth',
    //   component: () => import('@/views/auth/HomeAuthPage.vue'),
    //   children: [
    //     { path: '', component: () => import('@/views/main/ButtonPage.vue') },
    //   ]
    // }
  ]
})

export default router
