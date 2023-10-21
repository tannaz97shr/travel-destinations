interface NearbyTagProps {
  id: number;
  name: string;
}
function NearbyTag({ id, name }: NearbyTagProps) {
  return (
    <a
      className="bg-secondary rounded border border-custom-purple p-2 mr-2 mb-2 text-custpm-yellow"
      href={`/destination/${id}`}
    >
      {name}
    </a>
  );
}

export default NearbyTag;
