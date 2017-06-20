const routers = [{
    path: '/',
    meta: {
        title: '欢迎页'
    },
    component: (resolve) => require(['./views/login.vue'], resolve)
}, {
    path: '/home',
    meta: {
        title: '首页'
    },
    component: (resolve) => require(['./views/home.vue'], resolve),
    children: [
        {
            path: 'page1',
            meta: {
                title: '内页1'
            },
            component: (resolve) => require(['./views/page1.vue'], resolve),
        },
        {
            path: 'page2',
            meta: {
                title: '内页2'
            },
            component: (resolve) => require(['./views/page2.vue'], resolve),
        },
        {
            path: 'vip',
            meta: {
                title: '会员列表'
            },
            component: (resolve) => require(['./views/vip/vip.vue'], resolve)
        },
        {
            path: 'vip/vipDetail/:id',
            meta: {
                title: '会员详情'
            },
            component: (resolve) => require(['./views/vip/vipDetail.vue'], resolve)
        }

    ]
}];
export default routers;