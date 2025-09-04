import react from "react";
const User = (props)=>{
    return(
        <div>
                <h2>UserName : {props.name}[Functional Based]</h2>
                <h3>Location : {props.location}</h3>
                <h4>Bio : {props.bio}</h4>
        </div>
    )
};
export default User;