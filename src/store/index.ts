import { configureStore } from '@reduxjs/toolkit'
import carrinhoReducer from './carrinhoSlice'
import favoritosReducer from './favoritosSlice'
import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: carrinhoReducer,
    favorites: favoritosReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootState = ReturnType<typeof store.getState>
