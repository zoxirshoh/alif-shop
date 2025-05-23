import { FaBars } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux"; // Redux hook-ni import qilamiz
import { Catalog } from "../catalog/Caralog";
import { oldkatalogData } from "../../mock/oldcatalog-data";
import LoginModal from "../../pages/LoginModal/LoganModal";

const Header = ({ openModal }) => {
  // Redux store-dan savatdagi mahsulotlar olish
  const items = useSelector((state) => state.cart.items);

  // jami quantity ni hisoblash
  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="header">
      <div className="logo">
        <Link to={"/"}>
          <img
            src="https://alifshop.uz/_ipx/s_113x32/images/alifshop-logo.svg"
          />
        </Link>
      </div>
      <div className="catalog">
        <Catalog data={oldkatalogData} />
      </div>
      <div className="search">
        <input type="search" placeholder="Tovarlarni izlash" />
        <IoSearch />
      </div>
      <div className="cart" style={{ position: "relative" }}>
        <Link to={"/savat"}>
          <AiOutlineShoppingCart size={24} color="gray" />
        </Link>
        {totalQuantity > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-5px",
              right: "-10px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 7px",
              fontSize: "12px",
              fontWeight: "bold",
              userSelect: "none",
            }}
          >
            {totalQuantity}
          </span>
        )}
        <p>Savat</p>
      </div>
      <Link to={"/favorites"}>
      <div className="favorites">
        <CiHeart size={24} />
        <p>Saralanganlar</p>
      </div></Link>
      <button onClick={openModal} style={{
          padding: "10px 20px",
          backgroundColor: "#ffc107",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          Kirish
        </button>
      <div className="translate">
        <p>РУС/UZB</p>
      </div>
    </div>
  );
};

export default Header;
