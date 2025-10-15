import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { deleteItem } from "./cartSlice";
import toast from "react-hot-toast";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();
  
  const handleDelete = () => {
    dispatch(deleteItem(pizzaId));
    toast.success("Item removed from cart");
  };
  
  return (
    <Button type="small" onClick={handleDelete}>
      Delete
    </Button>
  );
}

export default DeleteItem;
