import React from "react";

function Todo({ todoName, todoDate }) {
  return (
    <>
      <div class="row">
        <div class="col-4">{todoName}</div>
        <div class="col-2">{todoDate}</div>
        <div class="col-2 button-row">
          <button type="button" class="btn btn-danger button-size">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo;
