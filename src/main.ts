import { createSSRApp } from 'vue'
import App from './App.vue'
import '@/styles/index.css'

export function createApp() {
  const app = createSSRApp(App)
  app.config.globalProperties.productionTip = false
  app.config.globalProperties.$backgroundAudioData = {
    playing: false,
    playTime: 0,
    formatedPlayTime: '00:00:00'
  }
  return {
    app
  }
}
