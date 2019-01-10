export default [{
    path: '/',
    meta: {
        title: '',
        keepAlive: false
    },
    redirect: '/home',
    }, 
    {
        path: '/home',
        meta: {
            title: '首页',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/views/home/home'))),
        children: [{
            path: '/home',
            meta: {
                title: '首页',
                keepAlive: false
            },
            component: r => require.ensure([], () => r(require('@/views/home/Recommend'))),
        },{
            path: '/Follow',
            meta: {
                title: '关注',
                keepAlive: false
            },
            component: r => require.ensure([], () => r(require('@/views/home/Follow'))),
        },{
            path: '/Recommend',
            meta: {
                title: '推荐',
                keepAlive: false
            },
            component: r => require.ensure([], () => r(require('@/views/home/Recommend'))),
        },{
            path: '/Videoes',
            meta: {
                title: '视频',
                keepAlive: false
            },
            component: r => require.ensure([], () => r(require('@/views/home/Videoes'))),
        }]
    },
    {
        path: '/userPage/:id',
        meta: {
            title: '感兴趣的弹友',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/userPage/userPage'))),
    },{
        path: '/ComicImg/:id',
        meta: {
            title: '感兴趣的弹友',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/comic/ComicImg'))),
    },{
        path: '/ComicImg',
        meta: {
            title: '加入版区',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/comic/ComicImg'))),
    },{
        path: '/comSearchPage',
        meta: {
            title: '加入版区',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/comic/comSearchPage'))),
    },
    ,{
        path: '/ComList',
        meta: {
            title: '感兴趣的弹友',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/comic/ComList'))),
    },
    
    {
        path: '/searchList',
        meta: {
            title: '首页搜索',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/views/home/searchList'))),
    },{
        path: '/serachResult',
        meta: {
            title: '搜索结果',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/views/home/serachResult'))),
    },{
        path: '/rankingList',
        meta: {
            title: '排名榜',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/views/home/rankingList'))),
    },{
        path: '/searchEdition',
        meta: {
            title: '版区搜索',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/views/edition/searchEdition'))),
    },{
        path: '/createEdition',
        meta: {
            title: '创建专区',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/views/edition/createEdition'))),
    },
    {
        path: '/TvDetails',
        meta: {
            title: 'Tv视频详情',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/details/TvDetails'))),
        children:[{
            path:'/TvDetails',
            meta: {
                title: '全部回复',
                keepAlive: false
            },
            component: r => require.ensure([], () => r(require('@/components/details/replyAll'))),
        },{
            path:'/replyAll',
            meta: {
                title: '全部回复',
                keepAlive: false
            },
            component: r => require.ensure([], () => r(require('@/components/details/replyAll'))),
        },{
            path:'/tvRecommend',
            meta: {
                title: '相关推荐',
                keepAlive: false
            },
            component: r => require.ensure([], () => r(require('@/components/details/tvRecommend'))),
        }]
    },
    {
        path: '/comment',
        meta: {
            title: '评论',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/details/comment'))),
    },
    {
        path: '/setInfo',
        meta: {
            title: '设置',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/header/setInfo'))),
    },
    {
        path: '/personalInfo',
        meta: {
            title: '个人资料',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/header/list/personalInfo'))),
    },
    {
        path: '/blacklist',
        meta: {
            title: '黑名单',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/header/list/blacklist'))),
    },
    {
        path: '/automatic',
        meta: {
            title: '自动回复',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/header/list/automatic'))),
    },
    {
        path: '/convention',
        meta: {
            title: '用户公约',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/header/list/convention'))),
    },
    {
        path: '/cooperation',
        meta: {
            title: '商务合作',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/header/list/cooperation'))),
    },
    {
        path: '/myCollection',
        meta: {
            title: '我的收藏',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/header/collection/myCollection'))),
    }, {
        path: '/CreateCollection',
        meta: {
            title: '创建收藏',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/header/collection/CreateCollection'))),
    }, {
        path: '/collectionList',
        meta: {
            title: '创建收藏',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/header/collection/collectionList'))),
    }, 
    {
        path: '/myTopic',
        meta: {
            title: '我的话题',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/header/list_one/myTopic'))),
    },{
        path: '/myDownload',
        meta: {
            title: '我的下载',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/header/list_one/myDownload'))),
    },{
        path: '/History',
        meta: {
            title: '浏览历史',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/header/list_one/History'))),
    },
    {
        path: '/edition',
        meta: {
            title: '版区',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/views/edition/edition'))),
        children: [{
            path: '/edition',
            meta: {
                title: '热门',
                keepAlive: false
            },
            component: r => require.ensure([], () => r(require('@/views/edition/hot'))),
        },{
            path: '/myEdition',
            meta: {
                title: '我的',
                keepAlive: false
            },
            component: r => require.ensure([], () => r(require('@/views/edition/myEdition'))),
        },{
            path: '/hot',
            meta: {
                title: '热区',
                keepAlive: false
            },
            component: r => require.ensure([], () => r(require('@/views/edition/hot'))),
        }
        ]
    },
    {
        path: '/chat',
        meta: {
            title: '消息',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/views/chat/chat'))),
    },{
        path: '/Myfriend',
        meta: {
            title: '我的弹友',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/views/chat/Myfriend'))),
    },{
        path: '/myFriendList/:id',
        meta: {
            title: '',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/views/chat/myFriendList'))),
    }
    ,{
        path: '/SystemInfo',
        meta: {
            title: '系统消息',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/views/chat/SystemInfo'))),
    },{
        path: '/reply',
        meta: {
            title: '回复我的',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/views/chat/reply'))),
    },{
        path: '/myInfo',
        meta: {
            title: '@我的',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/views/chat/myInfo'))),
    },{
        path: '/likes',
        meta: {
            title: '赞&糖果',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/views/chat/likes'))),
    },
    {
       path: '/User',
       meta: {
           title: '用户',
           keepAlive: false
       },
       component: r => require.ensure([], () => r(require('@/views/User/User'))),
    },{
        path: '/other',
        meta: {
            title: '用户',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/views/User/other'))),
     },
    {
        path: '/chatPage',
        meta: {
            title: '聊天页面',
            keepAlive: false
        },
        component: r => require.ensure([], () => r(require('@/components/chatPage/chatPage'))),
    }
]