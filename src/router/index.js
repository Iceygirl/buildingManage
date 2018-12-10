import Vue from 'vue'
import Router from 'vue-router'

// 授权页
import Authorize from 'pages/Authorize/Index'
// 身份认证页
import IdentifyVerify from 'pages/IdentifyVerify/Index'
// 预约主页
import Reserve from 'pages/Reserve/Index'

// 访客预约
import VisitorReserve from 'pages/Reserve/VisitorReserve'
// 会议室预约
import RoomReserve from 'pages/Reserve/RoomReserve'
// 预约编辑
import Edit from 'pages/Reserve/Edit'
// 记录查询
import Record from 'pages/Reserve/Record'

// 通知主页 
import Notice from 'pages/Notice/Index'

// 我的主页
import Mine from 'pages/Mine/Index'


Vue.use(Router)

export default new Router({
  routes: [
    { 
      path: '/', 
      name: 'Authorize',
      component: Authorize
    },
    { 
      path: '/identifyVerify', 
      name: 'IdentifyVerify',
      component: IdentifyVerify
    },
    { 
      path: '/reserve', 
      name: 'reserve',
      component: Reserve,
      meta: {
        showFooter:true
      },
      children:[{
        path: '/reserve/visitorReserve', 
        name: 'VisitorReserve',
        component: VisitorReserve
      },{
        path: '/reserve/roomReserve', 
        name: 'RoomReserve',
        component: RoomReserve
      },{
        path: '/reserve/edit', 
        name: 'Edit',
        component: Edit
      },{
        path: '/reserve/record', 
        name: 'Record',
        component: Record
      }]
    },
    { 
      path: '/notice', 
      name: 'notice',
      component: Notice,
      meta: {
        showFooter:true
      }
    },
    { 
      path: '/mine', 
      name: 'mine',
      component: Mine,
      meta: {
        showFooter:true
      }
    }
  ]
})
