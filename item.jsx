import './app.css'

function Item (props){


    return (
        <>
        <div className='item-box' style={{backgroundColor : props.color}}>
            <img src={props.location} alt="" className='item-img'/>
            <h1 className='number-item'>{props.number}</h1>
            <h6 className='text-item'>{props.text}</h6>
        </div>
        </>
    )
}

export default Item;