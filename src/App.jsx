import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./feature/home/page/home/Home"
import { Store } from "./feature/store/page/store/Store"
import { About } from "./feature/about/page/about/About"
import { Navbar } from "./components/navbar/Navbar"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import LoginPage from "./feature/login-page/page/login-page/LoginPage"
import { UserLoginContext } from "./context/UserLoginContext"
import { useLocalStorage } from "./hooks/useLocalStorage"
import RegisterPage from "./feature/register-page/page/RegisterPage"
import { AppDataContextProvider } from "./context/AppDataContext"
import Footer from "./components/footer/Footer.component"
import AdminDashboard from "./feature/admin-dashboard/pages/AdminDashboard"
import Order from "./feature/order-page/page/Order.component"


function App() {
  
  const [authUser, setAuthUser] = useLocalStorage(
    "authUser",
    {
        user: null,
        token: null,
    }
  )

  const authenticate = (loginContext) => {
    if (loginContext.message != null) return;
    setAuthUser(loginContext);
  }

  const logout = () => {
    
    setAuthUser(
      {
        user: null,
        token: null,
      }
  )};

  return (
    <>
      <UserLoginContext.Provider value={{ authUser, authenticate, logout }}>
        <AppDataContextProvider>
          <ShoppingCartProvider >
            <Container className="mb-4" >
              <Routes>
                  <Route path="/" element={<Navbar />}> 
                    <Route path="" element={<Home />} />
                    <Route path="store" element={<Store />} />
                    <Route path="about" element={<About />} />
                    <Route path="order" element={<Order />} />
                  </Route>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                
              </Routes>
            </Container>
          </ShoppingCartProvider>
          
          <Routes>
            <Route path="/admin/*" element={<AdminDashboard />} />
          </Routes>
        </AppDataContextProvider>
      </UserLoginContext.Provider>  
      </>
  )
}

export default App
