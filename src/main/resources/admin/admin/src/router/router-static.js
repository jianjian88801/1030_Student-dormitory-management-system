import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import richangshiwu from '@/views/modules/richangshiwu/list'
    import jiaofeixinxi from '@/views/modules/jiaofeixinxi/list'
    import zichanxinzeng from '@/views/modules/zichanxinzeng/list'
    import xuesheng from '@/views/modules/xuesheng/list'
    import suguanyuan from '@/views/modules/suguanyuan/list'
    import zichansunhuai from '@/views/modules/zichansunhuai/list'
    import xueshengxinxi from '@/views/modules/xueshengxinxi/list'
    import gongyuzichan from '@/views/modules/gongyuzichan/list'
    import chuangweianpai from '@/views/modules/chuangweianpai/list'
    import users from '@/views/modules/users/list'
    import qingligonggongchangsuo from '@/views/modules/qingligonggongchangsuo/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
          ,{
	path: '/richangshiwu',
        name: '日常事物',
        component: richangshiwu
      }
          ,{
	path: '/jiaofeixinxi',
        name: '缴费信息',
        component: jiaofeixinxi
      }
          ,{
	path: '/zichanxinzeng',
        name: '资产新增',
        component: zichanxinzeng
      }
          ,{
	path: '/xuesheng',
        name: '学生',
        component: xuesheng
      }
          ,{
	path: '/suguanyuan',
        name: '宿管员',
        component: suguanyuan
      }
          ,{
	path: '/zichansunhuai',
        name: '资产损坏',
        component: zichansunhuai
      }
          ,{
	path: '/xueshengxinxi',
        name: '学生信息',
        component: xueshengxinxi
      }
          ,{
	path: '/gongyuzichan',
        name: '公寓资产',
        component: gongyuzichan
      }
          ,{
	path: '/chuangweianpai',
        name: '床位安排',
        component: chuangweianpai
      }
          ,{
	path: '/users',
        name: '管理员',
        component: users
      }
          ,{
	path: '/qingligonggongchangsuo',
        name: '清理公共场所',
        component: qingligonggongchangsuo
      }
        ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
