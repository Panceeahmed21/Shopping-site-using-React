import { increment } from "../../redux/counterSlice";
import { decrement } from "../../redux/counterSlice";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const count = useSelector((state) => state.counter.counter);
  const dispatch = useDispatch();
  const increaseCounter = () => {
    {
      dispatch(increment());
    }
  };
  const decreaseCounter = () => {
    if (count > 0) {
      dispatch(decrement());
    }
  };
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-md-12">
            <h3 className="text-center"> Donate to us </h3>
            <div className="d-flex justify-content-evenly ">
              <button className="btn btn-success" onClick={decreaseCounter}>
                -
              </button>
              <h4>{count} <span className="text-success">EGP</span></h4>
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
