export type CheckoutType = 1 | 2 | 3 | 4;

export type State = {
  data: {
    orderId: number;
  };
  setCheckoutOrderId: (orderId: number | null) => void;
};
