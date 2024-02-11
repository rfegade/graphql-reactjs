import React from "react";

export default function NavButtons({ start, end, next, prev, onPage }) {
  return (
    <div className="f-flex justify-content-center my-2">
      {prev && (
        <button
          className="btn mx-1 btn-sm btn-primary bi bi-arrow-left"
          onClick={() => onPage("last", 'before: "' + start + '"')}
        />
      )}
      {next && (
        <button
          className="btn mx-1 btn-sm btn-primary bi bi-arrow-right"
          onClick={() => onPage("first", 'after: "' + end + '"')}
        />
      )}
    </div>
  );
}
