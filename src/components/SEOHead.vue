<template>
  <div></div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
  canonicalUrl?: string
}

const props = withDefaults(defineProps<SEOProps>(), {
  title: 'IT For Youth Ghana - Empowering Youth Through Technology',
  description: 'Empowering youth through technology education and digital skills training',
  keywords: 'IT education, youth empowerment, Ghana, technology training, digital skills',
  ogImage: '/og-image.jpg',
  canonicalUrl: ''
})

useHead({
  title: props.title,
  meta: [
    { name: 'description', content: props.description },
    { name: 'keywords', content: props.keywords },
    { property: 'og:title', content: props.title },
    { property: 'og:description', content: props.description },
    { property: 'og:image', content: props.ogImage },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: props.title },
    { name: 'twitter:description', content: props.description },
    { name: 'twitter:image', content: props.ogImage }
  ],
  link: props.canonicalUrl ? [{ rel: 'canonical', href: props.canonicalUrl }] : []
})
</script>