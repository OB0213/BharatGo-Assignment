import React from 'react';
import ModalComponent from './ModalComponent';

function Modal({modalData}) {
  return (
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5 text-center" id="exampleModalLabel">
              Details
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            {modalData !== null ? (
              <ModalComponent data={modalData}></ModalComponent>
            ) : (
              ""
            )}
            {}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal
