import { IDestination } from "../../models/destinations";
import { IconLoading } from "./icons";

interface ListModalProps {
  locations: IDestination[];
  loading: boolean;
  resetInput: () => void;
}

function ListModal({ locations, loading, resetInput }: ListModalProps) {
  console.log("is loading", loading);
  return (
    <div className=" flex flex-col bg-primary border border-custom-purple p-2 mt-4 z-20">
      {loading ? (
        <div className="flex justify-center items-center">
          <IconLoading /> Loading...
        </div>
      ) : (
        locations.map((location: IDestination) => (
          <a
            href={`/destination/${location.id}`}
            className="cursor-pointer my-2 px-3 py-2 
          hover:bg-custom-purple hover:text-custom-yellow"
            key={location.id}
          >
            {location.name}
          </a>
        ))
      )}
    </div>
  );
}

export default ListModal;
