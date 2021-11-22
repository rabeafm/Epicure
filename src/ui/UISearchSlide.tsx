import styled from 'styled-components';
const UISearchSlide = () => {
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
          placeholder="  Search.."
          name="search"
          className="searchbox-input"
          required
        />
      </form>
    </SearchDiv>
  );
};

export default UISearchSlide;

const SearchDiv = styled.div`
  margin: 0 5px;
  input {
    background: url('${process.env
        .REACT_APP_BASE_URL}/assets/navbar/mini-search-icon.svg')
      left no-repeat;
    padding-left: 20px;
    width: 16px;
    height: 20px;
    border: 0;
    transition: width 0.7s;
    &:focus {
      width: 80px;
    }
  }
`;
