import { IDestination } from "../../models/destinations";

interface ListModalProps {
  locations: IDestination[];
}

function ListModal({ locations }: ListModalProps) {
  return (
    <ul>
      {locations.map((location: IDestination) => (
        <li key={location.id}>{location.name}</li>
      ))}
    </ul>
  );
}

export default ListModal;
