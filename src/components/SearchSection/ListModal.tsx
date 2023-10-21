import { IDestination } from "../../models/destinations";

interface ListModalProps {
  locations: IDestination[];
}

function ListModal({ locations }: ListModalProps) {
  return (
    <ul className="bg-primary border border-custom-purple p-2 mt-4 z-20">
      {locations.map((location: IDestination) => (
        <li
          className="cursor-pointer my-2 px-3 py-2 
          hover:bg-custom-purple hover:text-custom-yellow"
          key={location.id}
        >
          <a href={`/destination/${location.id}`}>{location.name}</a>
        </li>
      ))}
    </ul>
  );
}

export default ListModal;
