import { useDispatch, useSelector } from "react-redux";
import { clearNotification } from "../reducers/notificationReducer";

const Notification = () => {
  const dispatch = useDispatch()
  const notification = useSelector((state) => state.notification);

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
    display: notification ? "block" : "none" 
  };

  if (notification) {
    setTimeout(() => {
      dispatch(clearNotification())
      }, 5000);
  }
  
    return <div style={style}>{notification}</div>;
};

export default Notification;
