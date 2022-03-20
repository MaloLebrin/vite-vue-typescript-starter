export const useMainStore = defineStore('main', {
  state: () => ({
    isLoggedIn: false,
    isLoading: false,
  }),
  getters: {
    getIsLoggedIn: (state) => state.isLoggedIn,
    getIsLoading: (state) => state.isLoading,
  },
  actions: {
    setIsLoggedIn() {
      this.isLoggedIn = true
    },
    setIsLoggedOut() {
      this.isLoggedIn = false
    },
    toggleIsLoading() {
      this.isLoading = !this.isLoading
    },
    resetAllState() {
      this.$reset()
    },
  },
})
