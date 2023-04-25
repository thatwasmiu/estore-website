import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/home/Home"
import { Store } from "./pages/store/Store"
import { About } from "./pages/about/About"
import { Navbar } from "./components/navbar/Navbar"
import { QueryClientProvider, QueryClient } from "react-query"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import LoginPage from "./pages/login-page/LoginPage"
import CartButton from "./components/cart-button/CartButton"
import { UserLoginContext } from "./context/UserLoginContext"
import { useLocalStorage } from "./hooks/useLocalStorage"


function App() {
  
  const [authUser, setAuthUser] = useLocalStorage(
    "authUser",
    {
        user: null,
        token: null,
    }
  )

  const authenticate = (context) => {
    setAuthUser(context);
  }

  const logout = () => {
    console.log("test")
    setAuthUser(
      {
        user: null,
        token: null,
      }
  )};

  return (
      <ShoppingCartProvider>
        <UserLoginContext.Provider value={{ authUser, authenticate, logout }}>
          <Container className="mb-4">
            <Routes>
                <Route path="/" element={<Navbar />}> 
                  <Route path="" element={<Home />} />
                  <Route path="store" element={<Store />} />
                  <Route path="about" element={<About />} />
                </Route>
              <Route path="/login" element={<LoginPage />} />
            </Routes>
          </Container>
        </UserLoginContext.Provider>
        
      </ShoppingCartProvider>
  )
}

export default App
