import antdEnUS from 'ant-design-vue/es/locale-provider/en_US'
import momentEU from 'moment/locale/eu'
import setting from './en-US/setting'

const components = {
  antLocale: antdEnUS,
  momentName: 'eu',
  momentLocale: momentEU
}

export default {
  'message': '-',
  'user.login.tab-login-credentials': 'Username&Password',
  'user.login.tab-cas': 'CAS',

  ...components,
  ...setting
}
