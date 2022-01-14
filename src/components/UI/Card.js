const Card = (props) => {
    return (
        <div className={`bg-white shadow-black rounded-xl ${props.className}`}>{props.children}</div>
    )
}

export default Card;