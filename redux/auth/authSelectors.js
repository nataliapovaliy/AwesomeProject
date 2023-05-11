export const selectUserId = (state) => state.auth.userId
export const selectName = (state) => state.auth.name
export const selectEmail = (state) => state.auth.email
export const selectPhoto = (state) => state.auth.photo
export const selectIsLogIn = (state) => state.auth.isLogIn
export const selectIsLoading = (state) => state.auth.isLoading
export const selectError = (state) => state.auth.error
export const selectRefresh = (state) => state.auth.isRefresh