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
          placeholder="Search.."
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
  input {
    height: 20px;
    width: 16px;
    padding-left: 25px;
    background: url('${process.env
        .REACT_APP_BASE_URL}/assets/navbar/mini-search-icon.svg')
      no-repeat;
    border: 0;
    transition: width 0.7s;
    text-align: left;
    &:focus {
      width: 80px;
    }
  }
`;
