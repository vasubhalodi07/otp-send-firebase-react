import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <div>
      <Toaster
        toastOptions={{
          duration: 3000,
          position: "right-bottom",
          success: {
            style: {
              background: "lightblue",
              fontSize: "15px",
            },
          },
          error: {
            style: {
              background: "#de4e5c",
              color: "white",
              fontSize: "15px",
            },
          },
        }}
      />
    </div>
  );
};

export default Toast;
