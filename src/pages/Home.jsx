import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function Home() {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["shows"],
    queryFn: () => {
      return axios.get("https://api.tvmaze.com/search/shows?q=all");
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="mx-10 flex gap-5 flex-wrap items-center">
      {data?.data?.map((item) => {
        return (
          <Link to={`/summary/${item.show.id}`}>
            <Card
              key={item.show.id}
              title={item.show.name}
              image={item.show.image?.medium}
              updated={item.show.updated}
              status={item.show.status}
              type={item.show.type}
              score={item.score}
            />
          </Link>
        );
      })}

      {isError && <div>Something went wrong</div>}
    </div>
  );
}
