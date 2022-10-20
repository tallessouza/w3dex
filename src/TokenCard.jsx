import React from 'react'

function TokenCard(props) {
    return (
        <div className='tokenCard'>
            <ul>
                <li>
                    <img 
                    className='logo' 
                    alt={props.value.name} 
                    src={props.value.logoURI} ></img>
                </li>
                <li>
                    {props.value.name} | {props.value.symbol} | {props.value.address}
                </li>
            </ul>
        </div>
    )
}

export default TokenCard