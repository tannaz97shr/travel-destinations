import { useParams } from "react-router-dom";

function Details() {
  let { destinationId } = useParams();
  console.log("Details section", destinationId);
  return <div>details section</div>;
}

export default Details;
