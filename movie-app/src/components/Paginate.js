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
    <ReactPaginate
      previousLabel={"Previous"}
      nextLabel={"Next"}
      pageCount={pageCount}
      onPageChange={changePage}
      containerClassName={"paginationBttns"}
      previousLinkClassName={"previousBttn"}
      nextLinkClassName={"nextBttn"}
      disabledClassName={"paginationDisabled"}
      activeClassName={"paginationActive"}
    />
  );
};

export default Paginate;
