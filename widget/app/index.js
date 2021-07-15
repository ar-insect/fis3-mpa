import { Vue, ElementUI } from 'widget/common/common'

// set ElementUI lang to EN
Vue.use(ElementUI)

export default function(app) {
  new Vue({
    el: '#app',
    render: (h) => h(app)
  })
}
