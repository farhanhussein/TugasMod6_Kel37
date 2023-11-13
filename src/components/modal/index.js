
import React from "react";
import "./index.css";

export default function index({ isShow, data, onCancel }) {
  return (
    <div className={!isShow ? "hidden" : ""} datacy="modal-delete">
      <div className="modal-bg" onClick={onCancel}></div>
      <div className="modal">
        {data && data.i && data.i.imageUrl ? (
          <img src={data.i.imageUrl} alt="sesuatu" />
        ) : null}
      </div>
    </div>
  );
}