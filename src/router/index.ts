import {createRouter, createWebHistory} from 'vue-router'

const doc: any = document

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'index',
            component: () => import('../views/index.vue'),

            meta: {
                title: '  آچاره |  آدرس ها',
            }
        },

        {
            path: '/address/CreateNewAddress',
            name: 'createNewAddress',
            component: () => import('../views/Address/CreateNewAddress.vue'),

            meta: {
                title: '  آچاره |  ثبت آدرس',
            }
        }
    ]
})
router.beforeEach((to, from) => {

    doc.title = to?.meta?.title

})

export default router
