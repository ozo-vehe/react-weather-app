const LoadingAlert = ({ message }) => {
  return (
    <div
      className="text-center text-slate-50 rounded backdrop-blur-md w-fit mx-auto bg-black/20 px-6 py-3"
      role="alert"
    >
      <p className="font-bold">{message || "Loading..."}</p>
      <p className="text-sm">Interacting with weather API.</p>
    </div>
  );
};

export default LoadingAlert;