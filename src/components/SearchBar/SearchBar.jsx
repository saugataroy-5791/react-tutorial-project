import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./searchBar.scss";

const SearchBar = ({ sendData }) => {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const handleSearchClick = () => {
    sendData(searchText);
  };

  return (
    <Form className="searchBar">
      <Form.Group
        className="mt-3 mt-lg-0 me-0 me-lg-4 searchbar-wrapper"
        controlId="exampleForm.ControlInput1"
      >
        <Form.Control
          type="text"
          placeholder="Search for anything"
          value={searchText}
          onChange={handleSearchChange}
        />
        <Button variant="primary" className="ms-2" onClick={handleSearchClick}>
          Search
        </Button>
      </Form.Group>
    </Form>
  );
};

export default SearchBar;
