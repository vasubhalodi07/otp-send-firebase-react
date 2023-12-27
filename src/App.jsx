import { useSelector } from "react-redux";
import { useState } from "react";
import Send from "./components/Send";
import Verify from "./components/Verify";
import Success from "./components/Success";
import Toast from "./components/Toast";

const App = () => {
  const { showComp, success } = useSelector((state) => state.otp);
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div>
      <div className="otp-container">
        {showComp && !isVerified ? (
          <Send />
        ) : !showComp && !success ? (
          <Verify onClick={() => setIsVerified(true)} />
        ) : (
          <Success />
        )}
      </div>

      <Toast />
    </div>
  );
};

export default App;
