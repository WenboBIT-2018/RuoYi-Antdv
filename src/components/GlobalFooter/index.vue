<template>
  <global-footer class="footer custom-render">
    <template v-slot:links>
      <a href="https://github.com/WenboBIT-2018/RuoYi-Antdv" target="_blank">Gitee</a>
      <a href="https://github.com/WenboBIT-2018/RuoYi-Antdv" target="_blank">Github</a>
    </template>
    <template v-slot:copyright>
      Copyright &copy; 2021 NorthWind96
    </template>
  </global-footer>
</template>

<script>
import { GlobalFooter } from '@/components/ProLayout'

export default {
  name: 'ProGlobalFooter',
  components: {
    GlobalFooter
  }
}
</script>
