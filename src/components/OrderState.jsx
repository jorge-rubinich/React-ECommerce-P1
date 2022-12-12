import React from 'react'

const OrderState = (props) => {
    const {state, stateLabel, actual} = props;
    const estadoOrden = state >actual ? 'Pending' : 'Complete';
    return (
    <div className='orderStateItemArrow'>
        <div className='orderStateItem'>
            <img className={"stateImg"+estadoOrden} src={"/imgs/state"+state+estadoOrden+".png"} alt={stateLabel} />
            <p className={"stateLabel"+estadoOrden}>{stateLabel}</p>
        </div>
        {state<actual && <img className="arrow" src="/imgs/arrow.png" alt="arrow" />}
    </div>
    
  )
}

export default OrderState