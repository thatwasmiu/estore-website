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
              <Route path="register" element={<RegisterPage />} />
            </Routes>
          </Container>
        </UserLoginContext.Provider>
        
      </ShoppingCartProvider>
  )
}

export default App
