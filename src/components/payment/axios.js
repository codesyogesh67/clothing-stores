import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3001/",
});

// export const stripeDataObjectConverter = (cardElement) => ({
//   payment_method: {
//     card: cardElement,
//   },
// });

export default instance;
