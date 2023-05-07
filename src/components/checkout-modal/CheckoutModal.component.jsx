import { useContext, useEffect,  useRef,  useState } from "react"
import { Button, Dropdown, Modal } from "react-bootstrap"
import { useAppDataContext } from "../../context/AppDataContext";
import { formatCurrency } from "../../utilities/formatCurrency";
import { UserLoginContext } from "../../context/UserLoginContext";
let order = {};

const CheckoutModal = ({ handleClose, items, totalPrice }) => {
    const [vouchers, setVoucherData] = useState([]);
    const { authUser } = useContext(UserLoginContext);
    const { products } = useAppDataContext();  
    const [displayPrice, setDisplayPrice] = useState(totalPrice); 
    const [isDiscounted, setDiscountedStatus] = useState(false);
    const titleRef = useRef("");
    
    // const [n, setN] = useState(-1)
    // const voucherDisplay = vouchers.slice().splice(n, 1);
    useEffect(() => {
        const object = {
            method: 'GET',
            headers: {
              'Authorization': `Bearer ` + authUser.token.value, // notice the Bearer before your token
            }
          }
      
        fetch('http://localhost:8080/api/v1/vouchers', object)
        .then((res) => res.json())
        .then(d => {setVoucherData(d);
        });

        order = {
            customerId: authUser.user.id,
            voucherId: null,
            products: items,
            orderPrice: displayPrice
        }
    }, [])


    const applyVoucher = (e) => {
        const percentage = e.currentTarget.getAttribute('value');
        order.voucherId = e.currentTarget.getAttribute('v-id');
        console.log(order.voucherId)
        e.currentTarget.disabled = true;
        setDisplayPrice(displayPrice => totalPrice - (displayPrice*percentage)/100);
        setDiscountedStatus(true);
    }

    const makeOrder = () => {
        console.log(JSON.stringify(order));

        const object = {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ` + authUser.token.value, // notice the Bearer before your token
            },
            body: JSON.stringify(order)
          }
    
        fetch('http://localhost:8080/api/v1/orders', object)
        .then((res) => res.json())
        .then((d) => {
            titleRef.current.textContent = "Making Order Successfully!!"
        });

    }

    return (
        <>
        <Modal.Header closeButton>
          <Modal.Title ref={titleRef}>Order Processing...</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <div className="text-muted border border-warning p-1" style={{ fontSize: "1.75rem" }}>
                Total Cost: 
                {" "}{formatCurrency(displayPrice)}
            </div>
            {items.map((i) => {
            let p = products.find(product => product.id === i.productId);
            
            return <div key={i.productId}>
                        {p.name}{" "}
                        <span className="text-info" style={{ fontSize: "1.65rem" }}>
                            x{i.quantity}
                        </span>
                    </div>
        })}</Modal.Body>
        <Modal.Footer>
            <Dropdown>
                <Dropdown.Toggle variant="info" id="dropdown-basic">
                    Apply Voucher
                </Dropdown.Toggle>
                <Dropdown.Menu>
                    {vouchers.map(v => (
                        <Dropdown.Item key={v.id} v-id={v.id} value={v.discountPercent} onClick={applyVoucher} disabled={isDiscounted}>{v.name}</Dropdown.Item>
                    ))}
                </Dropdown.Menu>
            </Dropdown>
            <Button variant="primary" onClick={makeOrder}>
                Confirm Order
            </Button>
        </Modal.Footer>
      </>
    )
}

export default CheckoutModal;