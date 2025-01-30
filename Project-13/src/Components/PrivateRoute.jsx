import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
    const { users } = useSelector(state => state.authReducer);
    
    return users ? element : <Navigate to="/signIn" replace />;
};

export default PrivateRoute;
