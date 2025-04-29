export const productRoutes = [
    {
        path: '/products',
        name : 'ProductList',
        component : () => import('@/features/product/views/ProductListView.vue')
    }
]