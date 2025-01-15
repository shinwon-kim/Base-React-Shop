import { useRecoilValueLoadable } from "recoil";
import { IProduct, productsList } from "../../store/products";
import {useParams, Link} from "react-router-dom";
import ProductsLoad from "./ProductsLoad";
import BreadCrumb from "../common/Breadcrumb";

const ProductsViewLoad = ():JSX.Element =>{
    const ProdcutsLoadable = useRecoilValueLoadable<IProduct[]>(productsList);
    const { id } = useParams();

    return(
        <div>
        </div>
    )

}

export default ProductsViewLoad;