import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import onAdd from './ItemDetail';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light-border.css';
import { useState } from 'react';

const UnitCount = (props) => {

    const {counter, stock, onQtyChange, preS, preP} = props;
    const [visible, setVisible] = useState(false);
    
    const handleClic= (cantidad) =>{
        /* Al cambiar la cantidad, informo a Item detail a traves de función onQtyChange recibido como props */
        onQtyChange(cantidad);
        tippyHide();
    }

    const tippyToogle = () => {setVisible(!visible)};
    const tippyShow = () =>{setVisible(true)};
    const tippyHide = () =>{setVisible(false)};

    return (
        <div className='cantidadContainer'>

                <Tippy className="tippyDropDown" arrow={false}  interactive={true} offset={[0, 10]} 
                         theme="light-border" visible={visible} 
                        placement="bottom-end" content={
                    <ul className="tippyWrapper">
                    { stock>=1 && <li className={"tippyOption"+(counter===1?" active": "")} onClick={()=>{handleClic(1)}}>1 {preS}</li>}
                    { stock>=2 && <li className={"tippyOption"+(counter===2?" active": "")} onClick={()=>{handleClic(2)}}>2 {preP}</li>}
                    { stock>=3 && <li className={"tippyOption"+(counter===3?" active": "")} onClick={()=>{handleClic(3)}}>3 {preP}</li>}
                    { stock>=4 && <li className={"tippyOption"+(counter===4?" active": "")} onClick={()=>{handleClic(4)}}>4 {preP}</li>}
                    { stock>=5 && <li className={"tippyOption"+(counter===5?" active": "")} onClick={()=>{handleClic(5)}}>5 {preP}</li>}
                    { stock>5 &&  <li className={"tippyOption"+(counter>5?" active": "")} onClick={()=>{handleClic(6)}}>más de 5 {preP}</li>}
                    
                    </ul>
                }>
                <div className='cantidadTitulo'  onClick={tippyToogle}>
                Cantidad: {counter} {counter>1? preP: preS}
                <div className='arrowContainer'>        

                    <i className='arrowIcon '/>
                </div>
                </div>
                </Tippy>
            </div>
    
    )
}

export default UnitCount