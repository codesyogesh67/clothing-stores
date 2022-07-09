import axios from "axios";

const instance = axios.create({
  baseURL: "https://tshirt-stripe.herokuapp.com/",
});

// export const stripeDataObjectConverter = (cardElement) => ({
//   payment_method: {
//     card: cardElement,
//   },
// });

export default instance;
