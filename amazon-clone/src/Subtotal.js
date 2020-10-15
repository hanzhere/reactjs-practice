import { ShoppingBasket } from '@material-ui/icons';
import React from 'react'
import CurrencyFormat from 'react-currency-format';

function Subtotal() {
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal (0 items):
                <strong>0</strong>
                        </p>
                        <small className='subtotal_gift'>
                            <input type='checkbox' /> This order contain a gift
                    </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Subtotal
