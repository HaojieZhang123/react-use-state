
const Button = (props) => {
    return (
        <>
            <button className={props.isActive ? 'active' : ''} onClick={props.onToggle}>{props.title}</button>
        </>
    )
}

export default Button