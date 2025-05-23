import { Link } from "react-router-dom"
import "../../components/realmi/realmi.css"
import { REALMIDATA } from "../../mock/realmi"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const Realmi = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        toast.success(`${item.name} savatga qo‘shildi!`);
    };
    
    return (
        <div className='arrivals'>
            <h1>Realme va Inoi smartfonlariga chegirmalar</h1>
            <div className="text">

                {REALMIDATA.map((item, index) => (
                    <div key={index} className="cards">
                        <Link to={`/singleRoute4/${item.id}`}>
                            <div className="img">
                                <img src={item.Image} alt={item.id} style={{ width: "160px", height: "170px", }} />
                            </div>
                        </Link>
                        <h2>{item.name}</h2>
                        <div className="month">
                            <p> dan {item.monthly_payment}</p>
                        </div>
                        <h3><del>{item.oldPrice} so'm</del> </h3>
                        <b>{item.price} so'm</b>
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

export default Realmi