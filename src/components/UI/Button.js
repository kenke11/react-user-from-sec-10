const Button = (props) => {
    return (
        <button
            className="border border-solid border-purple-900 bg-purple-900 text-white py-1 px-4 cursor-pointer rounded-sm focus:outline-0 hover:bg-purple-600 active:bg-purple-600 transition duration-200"
            type={props.type || 'button'}
            onClick={props.onClick}
        >
            {props.children}
        </button>
    )
}

export default Button;