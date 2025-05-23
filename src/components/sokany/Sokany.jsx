import { Link } from "react-router-dom"
import "../../components/sokany/sokany.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { SOKANYDATA } from "../../mock/sokany";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Sokany = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        toast.success(`${item.name} savatga qo‘shildi!`);
    };


    return (
        <div className='arrivals'>
            <h1>Sokany - Hammasi qulayligingiz uchun</h1>
            <div className="text">

                {SOKANYDATA.map((item, index) => (
                    <div key={index} className="cards">
                        <Link to={`/singleRoute6/${item.id}`}>
                            <div className="img">
                                <img src={item.Image} alt={item.id} style={{ width: "160px", height: "170px", }} />
                            </div>
                        </Link>
                        <h2>{item.name}</h2>
                        <div className="month">
                            <p>dan {item.monthly_payment}</p>
                        </div>
                        <h4>{item.price} so'm</h4>
                        <div className="button">
                            <AiOutlineShoppingCart />
                            <button onClick={() => handleAddToCart(item)}>Savatga</button>
                        </div>
                    </div>
                ))}
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
        </div>
    )
}

export default Sokany