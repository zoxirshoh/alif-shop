import Upheader from '../../components/upheader/Upheader';
import ImageSlider from '../../components/swiper/ImageSlider';
import Discount from '../../components/discount/Discount';
import RecommendedCards from '../../components/recomendedCards/RecomendedCards';
import Sport from '../../components/sport/Sport';
import Honor from '../../components/honor/Honor';
import Realmi from '../../components/realmi/Realmi';
import House from '../../components/house/House';
import Sokany from '../../components/sokany/Sokany';
import Genau from '../../components/genau/Genau';
import Parfume from '../../components/parfume/Parfume';
import Byd from '../../components/byd/Byd';
import Auto from '../../components/auto/Auto';
import Build from '../../components/build/Build';



const Home = () => {
  
  return (
    <div>
      <Upheader />
      <ImageSlider />
      <Discount/>
      <RecommendedCards />
      <Sport />
      <Honor />
      <Realmi />
      <House />
      <Sokany />
      <Genau />
      <Parfume />
      <Byd />
      <Auto />
      <Build/>
    </div>
  )
}

export default Home