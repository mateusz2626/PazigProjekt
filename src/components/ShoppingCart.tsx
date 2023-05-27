import { Button, Offcanvas, Stack } from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext"
import { formatCurrency } from "../utilities/formatCurrency"
import { CartItem } from "./CartItem"
import storeItems from "../data/items.json"
import { handleApiClick } from "../utilities/handleApiClick"
import { getCurrentDate } from "../utilities/getCurrentDate"

type ShoppingCartProps = {
  isOpen: boolean
}

export function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems,removeFromCart } = useShoppingCart()
  function CurrentCartFormatter(){
    cartItems.forEach((elem)=>handleApiClick({ProductName:(storeItems.find(i=>i.id==elem.id)?.name),
      ProductImage:(storeItems.find(i=>i.id==elem.id)?.imgUrl),
      ProductPrice:(storeItems.find(i=>i.id==elem.id)?.price),
      DateOfAdd:getCurrentDate(),Quantity:elem.quantity}))
    closeCart()
    cartItems.forEach((elem)=>removeFromCart(elem.id))
  }
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map(item => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Sum{" "}
            {formatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find(i => i.id === cartItem.id)
                return total + (item?.price || 0) * cartItem.quantity
              }, 0)
            )}
          </div> 
        </Stack>
        <div className="d-grid gap-2">
        <Button variant="success" size="sm" onClick={() => CurrentCartFormatter()}>Buy</Button>
        </div>
      </Offcanvas.Body>
    </Offcanvas>
  )
}
