import { Link } from "react-router-dom";
import { useState } from "react";
import BreadCrumb from "../common/Breadcrumb";
import Confirm from "../common/Confirm";

const CartView = (): JSX.Element => {
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const openConfirm = () => setIsConfirmOpen(true);
  const closeConfirm = () => setIsConfirmOpen(false);
  return (
    <>
      <BreadCrumb category="홈" crumb="장바구니" />
      <div className="mt-6 md:mt-14 px-2 lg:px-0 text-black dark:text-gray-400">
        {/* 물품이 없다면? */}
        <div>
          <h1 className="text-2xl ">장바구니에 물품이 없습니다.</h1>
          <Link to="/" className="btn btn-primary mt-10 border-none bg-violet-700 hover:bg-violet-800 text-white">
            담으러 가기
          </Link>
        </div>
        <div className="mt-10">
          <h1 className="text-2xl">총: $0</h1>
          <button className="btn btn-primary mt-10 border-none bg-violet-700 hover:bg-violet-800 text-white" onClick={openConfirm}> 구매하기 </button>
        </div>
        {isConfirmOpen && <Confirm closeConfirm={closeConfirm} />}
        {/* 구매하기 버튼 등 화면을 구성 해보세요. */}
      </div>

    </>
  );
};

export default CartView;
