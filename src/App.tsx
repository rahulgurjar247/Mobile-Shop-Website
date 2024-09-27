import {BrowserRouter ,Route ,Routes} from "react-router-dom"
import Home from "./pages/home"
import Product from "./pages/product"
import Service from "./pages/service"
function App() {
  return (
    <>
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={<Home />}></Route>
        <Route path="/product" element={<Product/>}></Route>
        <Route path="/Services" element={<Service/>} ></Route>
          
          
        </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
