

const Card = (props) => {
    return (
        <>
            {/* If isActive is true, the card class becomes card-active class */}
            {/* default card stay hidden, card-active will be displayed */}
            <div className={"card" + (props.isActive ? '-active' : '')}>
                <h2>{props.obj.title}</h2>
                <div className="description">
                    {props.obj.description}
                </div>
            </div>
        </>
    )
}

export default Card