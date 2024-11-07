const ErrorPage = ({ msg }) => {
  return <p>{msg ? msg : "Page Not Found"}</p>;
};

export default ErrorPage;
