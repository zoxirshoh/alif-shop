import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../../redux/cartSlice';
import { RiDeleteBin5Line } from 'react-icons/ri';
import './Savat.css'; // CSS faylni ulaymiz

const Savat = ({ openModal }) => {
    const items = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();
    const totalAmount = items.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="savat-container">
            <div className="items-section">
                <h1 className="savat-title">Savat ({items.length} ta mahsulot)</h1>
                {items.length === 0 ? (
                    <div className="empty">
                        <p className="empty-message">Savat bo‘sh</p>
                        <button><a href="/">Asosiy Menyuga O'tish</a></button>
                    </div>
                ) : (
                    items.map((item) => (
                        <div key={item.id} className="item-card">
                            <img src={item.Image} alt={item.name} className="item-image" />
                            <div className="item-info">
                                <h2>{item.name}</h2>
                                <p className="old-price">
                                    <del>{Number(item.oldPrice)?.toLocaleString()} so'm</del>
                                </p>
                                <p className="price">{Number(item.price).toLocaleString()} so'm</p>
                                <div className="quantity-controls">
                                    <button className='button-decrement' onClick={() => dispatch(decreaseQuantity(item.id))}>–</button>
                                    <span>{item.quantity}</span>
                                    <button className='button-increment' onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
                                </div>
                            </div>
                            <button onClick={() => dispatch(removeFromCart(item.id))} className="delete-btn">
                                <RiDeleteBin5Line size={20} />
                            </button>
                        </div>
                    ))
                )}
            </div>

            {/* Jami bo‘lim */}
            <div className="summary">
                <h2>Jami</h2>
                <p>Tovarlar soni: {items.length} dona</p>
                <p className="total-amount">{totalAmount.toLocaleString()} so'm</p>
                <button onClick={openModal} className="checkout-btn">Rasmiylashtirmoq</button>
            </div>
        </div>
    );
};

export default Savat;
