import React from "react";

import "./Pagination.css";

import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Pagination = ({ currentPage, handlePageChange }) => {
  return (
    <div className="pagination">
      <span
        className="nextprevious"
        onClick={() => handlePageChange(currentPage - 1)}
        hidden={currentPage === 1}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </span>
      Page {currentPage}
      <span
        className="nextprevious"
        onClick={() => handlePageChange(currentPage + 1)}
        hidden={currentPage === 10}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </span>
    </div>
  );
};

export default Pagination;
