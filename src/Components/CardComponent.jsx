const Card = function (props){
        return(
                        <div className="card" style={{ width: '20rem', height: '22rem', margin: '8px', border: '1px solid black'}}>
            
                                <img className="card-img-top" src={props.img} alt="Card image cap" width={100} height={200}></img>
                                
                                <div className="card-body" >
                                    <h4 className="card-title">{props.name}</h4>
                                    <h5 className="card-text">{props.price}</h5>
                                        
                                </div>
                                <div className="card-footer">
                                   <span>Ratings:</span> <span className="bi bi-star-fill"> {props.rating}</span>
                                   <span ></span>
                                </div>
                        </div>
        )
}

export default Card;