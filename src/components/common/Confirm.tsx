import { useRecoilState } from "recoil";
import { ICartState, cartState } from "../../store/cart";

const Confirm = ({ closeConfirm }: { closeConfirm: () => void }): JSX.Element => {
  const [cart, setCart] = useRecoilState<ICartState>(cartState);
  
  const buyItems = () => {
    setCart({} as ICartState);
    closeConfirm();
  }
  return (
    <>
      {/* <input type="checkbox" id="confirm-modal" className="modal-toggle " /> */}
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">정말로 구매하시겠습니까?</h3>
          <p className="py-4">장바구니의 모든 상품들이 삭제됩니다.</p>
          <div className="modal-action">
            <button className="btn btn-primary" data-cart={cart} onClick={buyItems}>
              네
            </button>
            <button className="btn btn-outline" onClick={closeConfirm}>
              아니오
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Confirm;
