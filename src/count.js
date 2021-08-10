import React from "react";

export default function Count() {
    const [count, setCount] = useState(0);
    let foo = () => {
      setCount(count + 1);
    };
  
    const [countone, setCountone] = useState(0);
    let fooone = () => {
      setCountone(countone + 1);
    };
    return (
        <div className="col-lg-2">
            
            <h4 class='center'>{count}</h4>
        </div>
    )
}