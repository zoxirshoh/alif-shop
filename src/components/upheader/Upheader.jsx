import { Link } from "react-router-dom";
import "./upheader.css"
import { MdKeyboardArrowDown } from "react-icons/md";

const Upheader = () => {
  return (
    <div className='Upheader'>
      <Link to="/"><p>Smartfonlar va gatjetlar</p></Link>
      <Link to="/"><p>Noutbooklar, kompyuterlar</p></Link>
      <Link to="/"><p>TV va proyektorlar</p></Link>
      <Link to="/"><p>Audiotexnikalar</p></Link>
      <Link to="/"><p>Transport</p></Link>
      <Link to="/"><p>Naborlar</p></Link>
      <Link to="/"><p>Uy uchun texnika</p></Link>
      <Link to="/"><p>Oshxona uchun texnika</p></Link>
      <p>Yana <MdKeyboardArrowDown /></p>
    </div>
  )
}

export default Upheader 