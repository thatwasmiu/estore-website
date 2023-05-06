import { Button, Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utilities/formatCurrency"
import { CartItem } from "../cart-item/CartItem"
import { useAppDataContext } from "../../context/AppDataContext"


export function ShoppingCart({ isOpen }) {
  const { closeCart, cartItems, handleShow } = useShoppingCart();
  const { products } = useAppDataContext();
 
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      
      <Button variant="info" className="btn btn-primary btn-sm" onClick={handleShow}>Make Order!!!</Button>
      <Offcanvas.Body>
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = products.find(i => i.id === cartItem.productId)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.productId} {...item} />
          ))}
          
        </Stack>
      </Offcanvas.Body>
      
    </Offcanvas>
  )
}
