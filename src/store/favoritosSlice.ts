import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProdutoState } from './carrinhoSlice'
import { Produto } from '../App'

const initialState: ProdutoState = {
  items: []
}

export const favoritosSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Produto>) => {
      state.items = [...state.items, action.payload]
    },
    removeItem: (state, action: PayloadAction<Produto>) => {
      state.items = state.items.filter((i) => i.id !== action.payload.id)
    }
  }
})

export const { addItem, removeItem } = favoritosSlice.actions
export default favoritosSlice.reducer
