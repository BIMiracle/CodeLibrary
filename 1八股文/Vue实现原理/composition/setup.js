const { reactive, watchEffect, onMounted } = Vue
export default {
  setup () {
    const state = reactive({ count: 0 })
    watchEffect(() => console.log(state.count))
    onMounted(() => console.log('mounted'))
    return {
      state,
      increment: () => { state.count++ }
    }
  }
}