import { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./searchBar.scss";
import { SearchContext } from "../../utils/context/SearchContext";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const { setSearchText } = useContext(SearchContext);

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    if (e.target.value === "") {
      setSearchText("");
    }
  };

  const handleSearchClick = () => {
    setSearchText(searchInput);
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
          value={searchInput}
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
