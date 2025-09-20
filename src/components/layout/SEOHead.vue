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
  title: 'IT For Youth Ghana - Technology Education & Coding Training for Ghanaian Youth',
  description: 'IT For Youth Ghana is a nonprofit providing coding bootcamps, web development training, data analytics courses, and digital skills education for young people in Ghana. Empowering women in tech and bridging the digital divide in Ghana\'s tech industry.',
  keywords: 'IT education Ghana, coding bootcamp Ghana, tech training Ghana, women in tech Ghana, digital skills Ghana, programming courses Ghana, web development training Ghana, data analytics Ghana, nonprofit organization Ghana, youth empowerment Ghana, technology education Ghana, Ghana tech industry, coding classes Ghana, IT For Youth Ghana',
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