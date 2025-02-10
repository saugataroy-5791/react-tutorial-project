import Form from "react-bootstrap/Form";
import "./searchBar.scss";

const SearchBar = () => {
  return (
    <Form className="searchBar">
      <Form.Group
        className="mt-3 mt-lg-0 me-0 me-lg-4"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Control type="text" placeholder="Search for anything" />
      </Form.Group>
    </Form>
  );
};

export default SearchBar;
