import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../App'

export interface ProdutoState {
  items: Produto[]
}

const initialState: ProdutoState = {
  items: []
}

export const carrinhoSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Produto>) => {
      if (state.items.find((i) => i.id === action.payload.id)) {
        alert('Item já adicionado')
      } else {
        state.items.push(action.payload)
      }
    }
  }
})

export const { addItem } = carrinhoSlice.actions
export default carrinhoSlice.reducer
