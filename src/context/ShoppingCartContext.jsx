import { createContext, ReactNode, useContext, useState } from "react"
import { ShoppingCart } from "../components/shopping-cart/ShoppingCart"
import { useLocalStorage } from "../hooks/useLocalStorage"
import { Button, Modal } from "react-bootstrap"
import CheckoutModal from "../components/checkout-modal/CheckoutModal.component"
import { useAppDataContext } from "./AppDataContext"

const ShoppingCartContext = createContext({})

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}
export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const { products } = useAppDataContext()
  const [cartItems, setCartItems] = useLocalStorage(
    "shopping-cart",
    []
  )

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  )

  const totalPrice = cartItems.reduce((total, cartItem) => {
    const item = products.find(i => i.id === cartItem.productId)
    return total + (item?.price || 0) * cartItem.quantity
  }, 0)

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)
  function getItemQuantity(productId) {
    return cartItems.find(item => item.productId === productId)?.quantity || 0
  }
  function increaseCartQuantity(productId) {
    setCartItems(currItems => {
      if (currItems.find(item => item.productId === productId) == null) {
        return [...currItems, { productId, quantity: 1 }]
      } else {
        return currItems.map(item => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function decreaseCartQuantity(productId) {
    setCartItems(currItems => {
      if (currItems.find(item => item.productId === productId)?.quantity === 1) {
        return currItems.filter(item => item.productId !== productId)
      } else {
        return currItems.map(item => {
          if (item.productId === productId) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }
  function removeFromCart(productId) {
    setCartItems(currItems => {
      return currItems.filter(item => item.productId !== productId)
    })
  }

  function resetCart() {
    setCartItems([]);
  }

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        resetCart,
        cartItems,
        cartQuantity,
        handleShow,
        totalPrice
      }}
    >
      <Modal size="lg" show={show} onHide={handleClose} aria-labelledby="example-modal-sizes-title-lg">
        <CheckoutModal handleClose={handleClose} items={cartItems}  totalPrice={totalPrice}/>
      </Modal>
      {children}
      <ShoppingCart isOpen={isOpen}/>
    </ShoppingCartContext.Provider>
  )
}
