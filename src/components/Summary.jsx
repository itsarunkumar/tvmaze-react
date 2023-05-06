import { useParams, useLoaderData, Link } from "react-router-dom";
import ReactModal from "react-modal";
import { useState } from "react";
import Form from "./Form";

export default function Summary({ idshow }) {
  const [isActive, setIsActive] = useState(false);
  const data = useLoaderData();
  const summary = data.data.summary;
  const updatedSummary = summary.replace(/(<([^>]+)>)/gi, "");
  return (
    <div className="relative ">
      <ReactModal
        isOpen={isActive}
        onRequestClose={() => setIsActive(false)}
        className="w-fit-content h-fit-content mt-20 flex justify-center items-center  rounded-lg shadow-2xl"
        overlayClassName="modal-overlay"
      >
        <div className="modal-content">
          <Form data={data.data} />
        </div>
      </ReactModal>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={data.data.image?.medium}
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{data.data.name}</h1>
            <p className="py-6">{updatedSummary}</p>
            <div className="flex items-center gap-5">
              <button
                onClick={() => setIsActive(true)}
                className="btn btn-primary"
              >
                Book Ticket
              </button>
              <Link to={`/`} className="btn btn-accent">
                Go Back
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
