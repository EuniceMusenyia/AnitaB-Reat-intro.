import React from "react";
import './style.css'
import { FaAngellist} from "react-icons/fa";

const Introduction =() =>{
    return(
       <div>
       <h1 className="heading"> What I have learned in react </h1>
       <p> React is a JavaScript Library</p>
       <FaAngellist/>
    
       <img id="shoe" src="https://res.cloudinary.com/dnuz9rw7k/image/upload/v1685637421/cld-sample-5.jpg"/>
       {/* <ul>
        <li>React components</li>
        <li>Function Based</li>
        <li> Class based</li>
        <li>JSX Elements</li>

       </ul> */}
       </div>
    )
}

export default Introduction