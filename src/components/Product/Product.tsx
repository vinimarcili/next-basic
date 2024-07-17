import { Product } from '../../interfaces/product'

interface ProductComponentProps {
  product: Product
}

const ProductComponent = ({ product }: ProductComponentProps) => {
  return (
    <div key={product.id} className="p-4 border rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-700 opacity-50">{product.price}</p>
    </div>
  )
}

export default ProductComponent

