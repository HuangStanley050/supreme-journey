import React from "react";
import ReactPaginate from "react-paginate";
import { useMovie } from "../context/MovieStore";

const Paginate = ({ moviesPerPage, setPageNumber }) => {
  const [state] = useMovie();
  const { movies } = state;
  const pageCount = Math.ceil(movies.length / moviesPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div data-testid="pageinateComponent">
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"pagination"}
        previousLinkClassName={"pagination__link"}
        nextLinkClassName={"pagination__link"}
        disabledClassName={"pagination__link--disabled"}
        activeClassName={"pagination__link--active"}
      />
    </div>
  );
};

export default Paginate;
