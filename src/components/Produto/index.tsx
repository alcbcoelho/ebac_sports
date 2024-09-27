import { useDispatch, useSelector } from 'react-redux'
import { addItem as addItemToCart } from '../../store/carrinhoSlice'
import {
  addItem as addItemToFavorites,
  removeItem as removeItemFromFavorites
} from '../../store/favoritosSlice'
import { RootState } from '../../store'

import { Produto as ProdutoType } from '../../App'
import * as S from './styles'

type Props = {
  produto: ProdutoType
}

export const paraReal = (valor: number) =>
  new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
    valor
  )

const ProdutoComponent = ({ produto }: Props) => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favorites.items)

  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(produto.preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() =>
          dispatch(
            favoritos.includes(produto)
              ? removeItemFromFavorites(produto)
              : addItemToFavorites(produto)
          )
        }
        type="button"
      >
        {favoritos.includes(produto)
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => dispatch(addItemToCart(produto))}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default ProdutoComponent
