import { Routes, Route } from "react-router-dom"
import { Container } from "react-bootstrap"
import { Home } from "./pages/Home"
import { Store } from "./pages/Store"
import { About } from "./pages/About"
import { Navbar } from "./components/navbar/Navbar"
import { QueryClientProvider, QueryClient } from "react-query"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import LoginPage from "./pages/login-page/LoginPage"
import CartButton from "./components/cart-button/CartButton"


function App() {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
        <CartButton />
      </ShoppingCartProvider>
    </QueryClientProvider>
  )
}

export default App
