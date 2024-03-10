import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Sass/main.scss";

// Components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loading
      ? document.querySelector("body").classList.add("loading")
      : document.querySelector("body").classList.remove("loading");
  }, [loading]);

  return (
    <AnimatePresence>
      {loading ? (
        <motion.div key="loader">
          <Loader setLoading={setLoading} />
        </motion.div>
      ) : (
        <div className="w-screen">
          <Header />
          <Banner />
          {!loading && (
            <div className="transition-image final">
              <motion.img
                transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
                src={import.meta.env.BASE_URL + `images/image-2.jpg`}
                layoutId="main-image-1"
              />
            </div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}

export default App;
