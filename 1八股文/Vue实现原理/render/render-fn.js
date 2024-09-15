const { h, createApp, createCommentVNode } = Vue

// const App = {
//   ok: false,
//   render () {
//     return h('div', {
//       id: 'hello'
//     }, [
//       this.ok ? h('span', 'world') : createCommentVNode("v-if", true)
//     ])
//   }
// }
const App = {
  ok: false,
  render () {
    return h('div', {
      id: 'hello'
    }, [
      h('span', null, ['hello', 'world'])
    ])
  }
}
createApp(App).mount('#app')