import antd from 'ant-design-vue/es/locale-provider/zh_CN'
import momentCN from 'moment/locale/zh-cn'
import setting from './zh-CN/setting'

const components = {
  antLocale: antd,
  momentName: 'zh-cn',
  momentLocale: momentCN
}

export default {
  'message': '-',
  'user.login.tab-login-credentials': '账号密码登录',
  'user.login.tab-cas': '统一身份认证登录',

  ...components,
  ...setting
}
