import video from './video'
import dht from './dht'


const pages = [
  {
    name: 'video',
    meta: {
      title: 'Videos',
    },
    component: video,
  },
  {
    name: 'DHT Q & A',
    meta: {
      title: 'DHT Q & A',
    },
    component: dht,
  },
  
  
]

pages.forEach((page, index) => page.path = `${index + 1}`)

export default pages