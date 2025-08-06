import LinkButton from "../../ui/LinkButton";

function EmptyCart() {
  return (
    <div className="px-4 py-3 sm:px-6">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>
      <p className="mt-6 text-base font-semibold sm:mt-7 sm:text-lg">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
