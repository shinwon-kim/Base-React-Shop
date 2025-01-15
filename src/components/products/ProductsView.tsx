import { useRecoilValueLoadable } from "recoil";
import { IProduct, productsList } from "../../store/products";
import { Link, useParams } from "react-router-dom";
import { toCurrencyFormat } from "../../helpers/helpers";
import BreadCrumb from "../common/Breadcrumb";
import Rating from "../common/Rating";


const ProductsView = () : JSX.Element => {
    const ProductsLoadable = useRecoilValueLoadable<IProduct[]>(productsList);
    const products: IProduct[] = "hasValue" === ProductsLoadable.state ? ProductsLoadable.contents : [] ;
    const productParam = useParams();
    const product: IProduct = products.filter((item) => productParam.id === item.id.toString())[0];
    
    return(
        <div>
            <BreadCrumb category={product.category} crumb={product.title}/>
            <div className="lg:flex lg:items-center mt-6 md:mt-14 px-2 lg:px-0">
                <figure className="flex-shrink-0 rounded-xl overflow-hidden">
                    <img src={product.image} alt={product.title} className="object-contain h-72 w-full" />
                </figure>
                <div className ="card-body px-1 lg:px-12 dark:text-gray-300">
                    <h2 className="card-title">
                        {product.title}
                        <span className="badge badge-accent ml-2">NEW</span>
                    </h2>
                    <p>{product.description}</p>
                    <Rating></Rating>
                    <p className="mt-2 mb-4 text-2xl">{toCurrencyFormat(product.price)}</p>
                    <div className="card-actions">
                        <button className="btn btn-primary border-none bg-violet-700 hover:bg-violet-800 text-white">
                            장바구니에 담기
                        </button>
                        <Link to="/cart" className="btn btn-outline ml-1 dark:text-white">
                            장바구니로 이동
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductsView