import { Link } from "react-router-dom";
import { toCurrencyFormat } from "../../helpers/helpers";
import type { IProduct } from "../../store/products";
import ProductsLoad from "./ProductsLoad";

const ProductsList =({products, limit} : {products: IProduct[]; limit: number}): JSX.Element => {
    return(
        <>
        {0 < products.length ? (
            products.slice(0, limit).map((product: IProduct) =>{
                return(
                    <Link
                        to={`/product/${product.id}`}
                        key={product.id}
                        className="card card-bordered border-gray-200 dark:border-gray-800 card-compact">
                            <figure className="flex h-80 bg-white overflow-hidden">
                                <img src={product.image} alt="상품 이미지" className="h-60 transition-transform duration-300" />
                            </figure>
                            <div className="card-body bg-gray-100 dark:bg-gray-700 text-black dark:text-gray-400">
                                <p className="card-title text-base">{product.title} </p>
                                <p className="text-base">{toCurrencyFormat(product.price)}</p>
                            </div>
                    </Link>
                );
            })
        ):(
            <ProductsLoad limit={limit} />
        )}
        </>
    )
}

export default ProductsList;