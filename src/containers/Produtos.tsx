import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProductsQuery } from '../services/api'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: products, isLoading } = useGetProductsQuery()

  if (isLoading) return <p>Carregando...</p>

  return (
    <>
      <S.Produtos>
        {products?.map((product) => (
          <Produto key={product.id} produto={product} />
        ))}
      </S.Produtos>
    </>
  )
}

export default ProdutosComponent
