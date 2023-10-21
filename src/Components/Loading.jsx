
import Spinner from 'react-bootstrap/Spinner';
const Loading = ({loading,error,children}) => {
 if(loading){
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
 }
 if(error){
  return <p>{error.message}</p>
 }
 return children
};

export default Loading;
