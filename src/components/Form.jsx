export default function Form({ data }) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl image-full">
      <figure>
        <img src={data.image?.medium} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{data.name}</h2>
        <p>{data.type}</p>
        <p>Lang:{data.language}</p>
        <p>Runtime:{data.runtime / 60} hr</p>
        <div className="card-actions justify-end">
          <button className="btn btn-sucess">Booked</button>
        </div>
      </div>
    </div>
  );
}
