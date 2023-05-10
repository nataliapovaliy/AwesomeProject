import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { register, login, logout, refresh } from './authOperations'

const initialState = {
    userId: '',
    name: '',
    email: '',
    photo: '',
    isLogIn: false,
    isLoading: false,
    isRefresh: false,
    error: '',
}

const handlePending = (state) => {
    state.isLoading = true
}
const handleFulfilled = (state, { payload }) => {
    const { userId, name, email, photo } = payload
    state.userId = userId
    state.name = name
    state.email = email
    state.photo = photo
    state.isLogIn = true
    state.isLoading = false
    state.error = ''
}
const handleRejected = (state, { payload }) => {
    state.error = payload
    state.isLoading = false
}
const handleLogoutFulfilled = (state) => {
    state.userId = ''
    state.name = ''
    state.email = ''
    state.photo = ''
    state.isLogIn = false
    state.isLoading = false
}

const handleUserFulfilledRefreshing = (state, { payload }) => {
    const { userId, name, email, photo, isLogIn } = payload
    state.userId = userId
    state.name = name
    state.email = email
    state.photo = photo
    state.isLogIn = isLogIn
    state.error = ''
    state.isRefresh = false
}
const handleRejectedRefreshing = (state, action) => {
    state.isRefresh = false
}
const handlePendingRefreshing = (state) => {
    state.isRefresh = true
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        removeError(state) {
        state.error = null
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(logout.fulfilled, handleLogoutFulfilled)
        .addCase(refresh.pending, handlePendingRefreshing)
        .addCase(refresh.fulfilled, handleUserFulfilledRefreshing)
        .addCase(refresh.rejected, handleRejectedRefreshing)
        .addMatcher(isAnyOf(register.pending, login.pending), handlePending)
        .addMatcher(isAnyOf(register.fulfilled, login.fulfilled), handleFulfilled)
        .addMatcher(isAnyOf(register.rejected, login.rejected), handleRejected)
    },
})
export const { removeError } = authSlice.actions
export const authReducer = authSlice.reducer