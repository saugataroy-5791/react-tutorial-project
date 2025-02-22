import { useRouteError } from "react-router-dom";
import Container from "react-bootstrap/Container";

const ErrorPage = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error-page content">
      <Container>
        <h2>{err.data}</h2>
        <h3>
          <span>{err.status}</span>
          &nbsp;
          <span>{err.statusText}</span>
        </h3>
      </Container>
    </div>
  );
};

export default ErrorPage;
