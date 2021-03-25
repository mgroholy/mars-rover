import Loader from "react-loader-spinner";

const loaderStyle = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const LoaderSpinner = () => {
  return (
    <Loader
      type="ThreeDots"
      color="#ad6242"
      height={50}
      width={50}
      style={loaderStyle}
    />
  );
};

export default LoaderSpinner;
