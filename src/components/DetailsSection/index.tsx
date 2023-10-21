import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchDestinationById } from "../../APIs/destinations";
import Info from "./Info";

function Details() {
  let { destinationId } = useParams();

  const { data } = useQuery({
    queryKey: ["destination"],
    queryFn: () => fetchDestinationById(Number(destinationId)),
  });
  console.log("query", data);
  console.log("Details section", destinationId);
  return (
    <div className="flex flex-col mt-6 p-4 border border-custom-pink rounded-lg">
      <div className="font-bold text-custom-yellow text-lg mb-3">
        {data?.destination?.name}
      </div>
      <div className="mb-3">{data?.destination?.description}</div>
      {data?.destination?.country && (
        <Info label={"country"} value={data?.destination?.country} />
      )}
      {data?.destination?.climate && (
        <Info label={"climate"} value={data?.destination?.climate} />
      )}
      {data?.destination?.currency && (
        <Info label={"currency"} value={data?.destination?.currency} />
      )}
    </div>
  );
}

export default Details;
