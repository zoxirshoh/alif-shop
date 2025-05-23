import "./App.css"
import Header from './components/header/Header'
import { Route, Routes } from 'react-router-dom'
import SingleRoute from "./pages/singleRoute/SingleRoute"
import Home from './pages/home/Home'
import Footer from "./components/footer/Footer"
import { Provider } from "react-redux"
import { store } from "./redux/store"
import Savat from "./pages/savat/Savat"
import { ToastContainer } from "react-toastify"
import SingleRoute1 from "./pages/singleRoute/SingleRoute1"
import SingleRoute2 from "./pages/singleRoute/SingleRoute2"
import SingleRoute3 from "./pages/singleRoute/SingleRoute3"
import SingleRoute4 from "./pages/singleRoute/SingleRoute4"
import SingleRoute5 from "./pages/singleRoute/SingleRoute5"
import SingleRoute6 from "./pages/singleRoute/SingleRoute6"
import SingleRoute7 from "./pages/singleRoute/SingleRoute7"
import SingleRoute8 from "./pages/singleRoute/SingleRoute8"
import SingleRoute9 from "./pages/singleRoute/SingleRoute9"
import SingleRoute10 from "./pages/singleRoute/SingleRoute10"
import SingleRoute11 from "./pages/singleRoute/SingleRoute11"
import Favorites from "./pages/favorites/Favorites"
import { useState } from "react"
import LoginModal from "./pages/LoginModal/LoganModal"


const App = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  return (
    <Provider store={store}>
      <div className='container'>
        <Header  openModal={openModal}/>
        <LoginModal isOpen={modalOpen} onClose={closeModal} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/singleRoute/:id" element={<SingleRoute />} />
          <Route path="/singleRoute1/:id" element={<SingleRoute1 />} />
          <Route path="/singleRoute2/:id" element={<SingleRoute2 />} />
          <Route path="/singleRoute3/:id" element={<SingleRoute3 />} />
          <Route path="/singleRoute4/:id" element={<SingleRoute4 />} />
          <Route path="/singleRoute5/:id" element={<SingleRoute5 />} />
          <Route path="/singleRoute6/:id" element={<SingleRoute6 />} />
          <Route path="/singleRoute7/:id" element={<SingleRoute7 />} />
          <Route path="/singleRoute8/:id" element={<SingleRoute8 />} />
          <Route path="/singleRoute9/:id" element={<SingleRoute9 />} />
          <Route path="/singleRoute10/:id" element={<SingleRoute10 />} />
          <Route path="/singleRoute11/:id" element={<SingleRoute11 />} />
          <Route path="/savat" element={<Savat />} />
          <Route path="/favorites" element={ <Favorites/> }/>
        </Routes>
        <Footer />
        <ToastContainer />
      </div>
    </Provider>
  )
}

export default App