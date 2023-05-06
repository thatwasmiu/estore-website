import { Button, Stack } from "react-bootstrap"
import { useShoppingCart } from "../../context/ShoppingCartContext"
import { formatCurrency } from "../../utilities/formatCurrency"
import { useAppDataContext } from "../../context/AppDataContext";

export function CartItem({ productId, quantity }) {
  const { removeFromCart, decreaseCartQuantity, increaseCartQuantity } = useShoppingCart();
  const { products } = useAppDataContext();
  const item = products.find(i => i.id === productId)
  if (item == null) return null

  return (
    <Stack direction="vertical" gap={2} className="d-flex align-items-center border border-primary p-1">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrency(item.price)}
        </div>
      </div>
      <div> {formatCurrency(item.price * quantity)}</div>
      
      <div
        className="d-flex align-items-center flex-column"
        style={{ gap: ".5rem" }}
      >
        <div
          className="d-flex align-items-center justify-content-center"
          style={{ gap: ".5rem" }}
        >
          <Button onClick={() => decreaseCartQuantity(productId)}>-</Button>
          <div>
            <span className="fs-3">{quantity}</span>
          </div>
          <Button onClick={() => increaseCartQuantity(productId)}>+</Button>
        </div>
        <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
        >
          &times;
        </Button>
      </div>
    </Stack>
  )
}
