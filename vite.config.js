import { defineConfig } from 'vite'

export default defineConfig({
  preview: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: [
      'funconsulting.my.id',
      'www.funconsulting.my.id',
      'funconsulting-app'
    ]
  }
})
