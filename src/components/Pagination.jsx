import React from "react";

function Pagination({ meta, onPageChange }) {
  return (
    <div style={{ marginTop: "20px" }}>
      <button
        disabled={!meta.prev_page}
        onClick={() => onPageChange(meta.prev_page)}
      >
        Prev
      </button>

      <span style={{ margin: "0 10px" }}>
        Page {meta.current_page} of {meta.total_pages}
      </span>

      <button
        disabled={!meta.next_page}
        onClick={() => onPageChange(meta.next_page)}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
