import React, { useEffect, useState } from "react";
import { Header } from "./components";
import "./App.css";
import {
  updateProducts,
  updateCategoryLinks,
} from "./features/products/productsSlice";
import { useDispatch } from "react-redux";
import { login } from "./features/auth/authSlice";
import { auth, db } from "./firebase";
import Footer from "./containers/footer";
import categoryLinks from "./app/data/CategoryLinks"
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState([])



  useEffect(() => {
    db.collection("productsList").onSnapshot(snapshot => {
      setData(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
    })

  }, []);



  useEffect(() => {

    dispatch(updateProducts(data));
    dispatch(updateCategoryLinks(categoryLinks));
  });

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            userId: authUser.id,
            email: authUser.email,
            name: authUser.displayName,
          })
        );
      }
    });
  }, []);



  return (
    <>
      <Header />
      <div className="app__body">
        <AnimatedRoutes />

      </div>
      <Footer />
    </>
  );
}

export default App;
