export default function Card({ title, image, updated, status, type, score }) {
  const updatesTime = new Date(updated).toLocaleDateString("en-US");

  return (
    <div class=" my-5 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
      <img
        class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src={
          image
            ? image
            : "https://tecdn.b-cdn.net/wp-content/uploads/2020/06/vertical.jpg"
        }
        alt=""
      />
      <div class="flex flex-col justify-start p-6">
        <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>

        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">{status}</div>
            <div className="stat-value">{score.toFixed(2)}/1</div>
            <div className="stat-desc">Last updated on {updatesTime}</div>
          </div>
        </div>

        <div className="mt-5">
          <div className="text-sm text-neutral-500 dark:text-neutral-400">
            {type}
          </div>
        </div>
      </div>
    </div>
  );
}
