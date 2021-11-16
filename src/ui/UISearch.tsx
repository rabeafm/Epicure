import styled from 'styled-components';
const UISearch = () => {
  return (
    <SearchDiv>
      <form
        className="searchbox"
        onSubmit={(e) => {
          e.preventDefault();
          console.log(e);
        }}
      >
        <input
          type="text"
          placeholder="Search for resturant, cuisine, chef"
          name="search"
          className="searchbox-input"
          style={{
            backgroundImage: `${process.env.REACT_APP_BASE_URL}assets/navbar/search.svg`,
          }}
          required
        />
      </form>
    </SearchDiv>
  );
};

export default UISearch;

const SearchDiv = styled.div`
  margin: 13px 5px;
  width: 90%;

  input {
    width: 100%;
    height: 20px;
    background-repeat: no-repeat;
    background-position: left;
    background-position: 5px 5px;
    padding: 15px 8px 14px 25px;
    border: solid 0.2px lightgrey;
    border-radius: 4px;
    font-size: 13px;
  }
`;
