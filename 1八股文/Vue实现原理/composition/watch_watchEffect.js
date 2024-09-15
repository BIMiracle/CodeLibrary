const { reactive, watchEffect, watch, onMounted } = Vue
export default {
  setup () {
    const state = reactive({ count: 0 })
    watchEffect(() => console.log(state.count))
    watch(() => state.count, (count, oldCount) => {
      console.log(count, oldCount)
    })
    onMounted(() => console.log('mounted'))
    return {
      state,
      increment: () => { state.count++ }
    }
  }
}