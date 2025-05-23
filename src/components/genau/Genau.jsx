import { Link } from "react-router-dom"
import "../../components/sport/sport.css"
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GENAUDATA } from "../../mock/genau";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const Genau = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        toast.success(`${item.name} savatga qo‘shildi!`);
    };

    return (
        <div className='arrivals'>
            <h1>Genau — sizning eng samarali mashg‘ulotlaringiz uchun</h1>
            <div className="text">

                {GENAUDATA.map((item, index) => (
                    <div key={index} className="cards">
                        <Link to={`/singleRoute7/${item.id}`}>
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

export default Genau