import counterAction from "@/components/server/Cart/actions/counterAction";

type CartQuantityProps = {
  id: string;
  quantity: number;
};

export default function CartQuantity({ id, quantity }: CartQuantityProps) {
  return (
    <form
      className="flex items-center justify-center"
      action={counterAction.bind(undefined, id, quantity)}
    >
      <div className="rounded-lg bg-accent [&>button]:px-4 [&>button]:py-2">
        <button
          name="action"
          type="submit"
          value="decrease"
          aria-label="Decrease quantity"
        >
          -
        </button>
        <span className="mx-2 inline-block font-semibold">{quantity}</span>
        <button
          name="action"
          type="submit"
          value="increase"
          aria-label="Increase quantity"
        >
          +
        </button>
      </div>
    </form>
  );
}
