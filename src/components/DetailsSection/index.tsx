import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import {
  fetchAllDestinations,
  fetchDestinationById,
} from "../../APIs/destinations";
import { calculateDestination } from "../../helpers";
import { IDestination, INearbyDest } from "../../models/destinations";
import Loading from "../UIComponents";
import Info from "./Info";
import NearbyTag from "./NearbyTag";

function Details() {
  const [fiveNearby, setFiveNearby] = useState<INearbyDest[]>([]);
  const [isNearbyLoading, setIsNearbyLoading] = useState<boolean>(false);
  let { destinationId } = useParams();
  const { data } = useQuery({
    queryKey: ["destination"],
    queryFn: () => fetchDestinationById(Number(destinationId)),
  });
  useEffect(() => {
    if (data?.destination) {
      const getFiveNearby = async (lat: number, lon: number) => {
        setIsNearbyLoading(true);
        const allDestinations = await fetchAllDestinations();
        if (!allDestinations.destinations) return;
        const nearbys: INearbyDest[] = allDestinations.destinations.flatMap(
          (dest: IDestination) => {
            const distance = calculateDestination(
              lat,
              lon,
              dest.latitude,
              dest.longitude
            );
            return {
              id: dest.id,
              name: dest.name,
              distance: distance,
            };
          }
        );
        const sortedArray = [...nearbys].sort(
          (a: INearbyDest, b: INearbyDest) => {
            if (a.distance < b.distance) {
              return -1;
            }
            if (a.distance > b.distance) {
              return 1;
            }
            return 0;
          }
        );
        console.log("result", sortedArray.slice(1, 6));
        setFiveNearby([...sortedArray.slice(1, 6)]);
        setIsNearbyLoading(false);
      };
      getFiveNearby(data?.destination.latitude, data?.destination.longitude);
    }
  }, [data?.destination]);
  return (
    <div className="flex flex-col mt-6 p-4 border border-custom-pink rounded-lg min-h-[400px]">
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
      <div className="font-bold text-custom-yellow text-lg">
        Nearby Deatinations :
      </div>
      {isNearbyLoading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap mt-4">
          {fiveNearby.map((dest: INearbyDest) => (
            <NearbyTag key={dest.id} id={dest.id} name={dest.name} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Details;
