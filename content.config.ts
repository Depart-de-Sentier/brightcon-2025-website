import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    agenda: defineCollection({
      type: 'page',
      source: 'agenda/**/*.md'
    })
  }
})
