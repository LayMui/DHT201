import video from './video'
import dht1 from './dht1'
import dht2 from './dht2'

const pages = [
  {
    name: 'video',
    meta: {
      title: 'Videos',
    },
    component: video,
  },
  {
    name: 'DHT Q & A Video 1-10',
    meta: {
      title: 'DHT Q & A Video 1-10',
    },
    component: dht1,
  },

  {
    name: 'DHT Q & A Video 11-19',
    meta: {
      title: 'DHT Q & A Video 11-19',
    },
    component: dht2,
  },
]

pages.forEach((page, index) => page.path = `${index + 1}`)

export default pages