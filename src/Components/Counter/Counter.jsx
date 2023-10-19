import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const increaseCounter = () => {
    if (count >= 0 && count < 10) {
      setCount(count + 1);
    }
  };
  const decreaseCounter = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <div className="d-flex justify-content-evenly ">
             
            <button className="btn btn-success" onClick={decreaseCounter}>
                -
              </button>
              <div>{count}</div>
             
              <button className="btn btn-success" onClick={increaseCounter}>
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Counter;
