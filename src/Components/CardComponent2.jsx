function CardComponent2(props){
    return(
        <div>
            <h2>{props.name}</h2>
            <h3>{props.costForTwoMessages}</h3>
            <h3>{props.cuisines.join(", ")}</h3>
            <h3>{props.avgRating} stars</h3>
        </div>
    )
}
export default CardComponent2;