import { useParams } from "react-router-dom";
import "../singleRoute/singleroute.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BYDDATA } from "../../mock/byd";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import { FaStar } from "react-icons/fa6";
import ProductActions from "../../components/ProductActions/ProductActions";


const SingleRoute9 = () => {
    const params = useParams();
    const data = BYDDATA.find((item) => item.id == params.id)

    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        toast.success(`${item.name} savatga qo‘shildi!`);
    };


    return (
        <div className="route">
            <div className="img">
                <img src={data.Image} alt="" style={{ width: "400px", height: "400px", }} />
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            <div className="text3">
                <div className="star">
                    <FaStar color="gold" />
                    <FaStar color="gold" />
                    <FaStar color="gold" />
                    <FaStar color="gold" />
                    <FaStar color="gold" />
                </div>
                <div className="discount">
                    <p>{data.discount}</p>
                </div>
                <h2 >{data.name}</h2>
                <div className="money">
                    <div className="month">
                        <p>Muddatli to’lovga sotib olish</p>
                        <h3>{data.monthly_payment}</h3>
                    </div>
                    <div className="price">
                        <p>Narx</p>
                        <h2>{data.price} so'm</h2>
                        <h4>{data.oldPrice} so'm</h4>
                    </div>
                </div>
                <ProductActions />
                <div className="button">
                    <AiOutlineShoppingCart size={20} />
                    <button onClick={() => handleAddToCart(data)}>
                        Savatga
                    </button>
                </div>
            </div>
        </div>
    )
}

export default SingleRoute9