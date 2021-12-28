<template>
</template>

<script>

import { timeFix } from '@/utils/util'
import storage from 'store'
import { ACCESS_TOKEN } from '@/store/mutation-types'

export default {
  components: {},
  data () {
    return {}
  },
  beforeCreate () {
    if (this.$route.query.token) {
      // 1.从params 拿到token
      const token = this.$route.query.token
      storage.set(ACCESS_TOKEN, token, 7 * 24 * 60 * 60 * 1000)
      this.$store.commit('SET_TOKEN', token)
      // 2.跳转到首页
      this.$router.replace({ path: '/' })
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.$notification.success({
          message: '欢迎',
          description: `${timeFix()}，欢迎回来`
        })
      }, 1000)
    } else {
      this.$router.replace({ path: '/user/login' })
    }
  },
  methods: {}
}
</script>
