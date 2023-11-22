<template>
  <aside class="vp-blog-info-wrapper">
    <DropTransition>
      <BloggerInfo/>
    </DropTransition>
  </aside>
</template>

<script setup lang="ts">
import DropTransition from '@theme-hope/components/transitions/DropTransition'
import BloggerInfo from '@theme-hope/modules/blog/components/BloggerInfo'
import 'vuepress-theme-hope/modules/blog/styles/info-panel.scss'
</script>
