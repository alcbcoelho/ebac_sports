import { useSelector } from 'react-redux'
import { RootState } from '../../store'

import * as S from './styles'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'

const Header = () => {
  const itensNoCarrinho = useSelector((state: RootState) => state.cart.items)
  const itensFavoritados = useSelector(
    (state: RootState) => state.favorites.items
  )

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensFavoritados.length} favoritos</span>
        <img src={cesta} />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
