import React,{useState, useEffect} from "react";
// import axios from "axios";
import jsonData from "../../../public/products.json";
// const productsURL = "/products.json";
const productsURL = jsonData;
console.log(productsURL);

const Search = ():JSX.Element => {
    const [searchTerm, setSearchTerm] = useState<string>("");
    const [products, setProducts] = useState<any[]>([]);
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

    // useEffect(() =>{
    //     // 컴포넌트가 마운트 될 때 JSON파일을 가져옴
    //     const fetchProducts = async () =>{
    //         try{
    //             const response = await axios.get(productsURL);
    //             console.log(`resonse.data: ${response.data}`);
    //             if(Array.isArray(response.data)){
    //                 setProducts(response.data);
    //                 setFilteredProducts(response.data);
    //             }
    //             else{
    //                 console.error("응답 데이터가 배열이 아닙니다");
    //             }
    //         } catch(error){
    //             console.log("Errer fetching products:", error);
    //         }
    //     };
    //     fetchProducts();
    // }, []);

    const handleSearchChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setSearchTerm(value);

        const filtered = products.filter((product) =>
            product.title.toLowerCase().includes(value.toLowerCase())
        );
        setFilteredProducts(filtered);
    }

    return (
        <>
            <div className="relative">
                <input
                type="text" className="h-12 rounded-md p-4 w-full bg-gray-200 dark:bg-gray-600 focus:outline-none" 
                placeholder="검색" value={searchTerm} onChange={handleSearchChange}
                />
                {searchTerm && (
                <div className="absolute top-12 left-0 w-full bg-white dark:bg-gray-600 text-black dark:text-white border-none mt-2">
                    <ul>
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                        <li key={product.id} className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 cursor-pointer">
                            <span>{product.title}</span>
                        </li>
                        ))
                    ) : (
                        <li className="p-2">검색 결과가 없습니다.</li>
                    )}
                    </ul>
                </div>
            )}
            </div>

        </>
    );

};

export default Search;


