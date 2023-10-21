import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { fetchDestinationById } from "../../APIs/destinations";

function Details() {
  let { destinationId } = useParams();

  const { data } = useQuery({
    queryKey: ["destination"],
    queryFn: () => fetchDestinationById(Number(destinationId)),
  });
  console.log("query", data);
  console.log("Details section", destinationId);
  return <div>details section</div>;
}

export default Details;
