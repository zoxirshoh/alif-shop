import { AiOutlineShoppingCart } from "react-icons/ai";
import { INTESETDATA } from "../../mock/interested";
import "./recomendedCards.css"
import { Link } from "react-router-dom";
import { addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
import {ToastContainer, toast  } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RecommendedCards = () => {
    const dispatch = useDispatch();

    const handleAddToCart = (item) => {
        dispatch(addToCart(item));
        toast.success(`${item.title} savatga qo‘shildi!`);
    };
    
    
    

    return (
        <div className='arrivals1'>
            <h1>Sizni qiziqtirishi mumkin</h1>
            <div className="text">
                {INTESETDATA.map((item, index) => (
                    <div key={index} className="cards">
                        <Link to={`/singleRoute1/${item.id}`}>
                            <div className="img">
                                <img src={item.Image} alt={item.title} />
                            </div></Link>
                        <h2>{item.title}</h2>
                        <div className="month">
                            <p> dan {item.monthly_payment}</p>
                        </div>
                        <h3><del>{item.price_before} so'm</del> </h3>
                        <b>{item.price_after} so'm</b>
                        <div className="button">
                            <AiOutlineShoppingCart />
                            <button onClick={() => handleAddToCart(item)}>
                                Savatga
                            </button>
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
    );
};

export default RecommendedCards;
