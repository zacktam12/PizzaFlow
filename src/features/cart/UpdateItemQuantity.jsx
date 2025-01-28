import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

function UpdateItemQuantity({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="item-center flex gap-2 md:gap-3">
      <Button
        type="round"
        onclick={() => dispatch(increaseItemQuantity(pizzaId))}
      >
        +
      </Button>
      <span className="gap-2 text-sm font-medium md:gap-3">
        {currentQuantity}
      </span>
      <Button
        type="round"
        onclick={() => dispatch(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
