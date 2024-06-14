import React, { Children } from 'react'

const BACKGROUND_STYLE = {
    position:'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    backgroundColor: 'rgb(0,0,0, 0.7',
    zIndex: '1000'
}

const MODAL_STYLE = {
    position:'fixed',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    left: '50%',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
     display: 'flex',
    flexDirection: 'Column',
    justifyContent: 'space-between',

    alignItems: 'center'

}

const MODAL_BUTTON_STYLE = {
    border: '4px solid red'
}

export default function Modal({isOpen, children}) {
    if (isOpen) {
        return (
            <div style={BACKGROUND_STYLE}>
                <div style={MODAL_STYLE}>
                <h1 className='text-xl'>Atenção</h1>
                    {children }  
                </div>
            </div>
        )

        return null
    }
    
}


