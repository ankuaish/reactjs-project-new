import { SubjectContext } from "./ContextData";
import { useContext } from "react";

export default function Subject() {
    const subject = useContext(SubjectContext)
    return (
      <div  style={{backgroundColor:'red', padding:10}}>
        <h1>Subject is:{subject}</h1>
       
      </div>
    )
  
  }