interface InfoProps {
  label: string;
  value: string;
}

function Info({ label, value }: InfoProps) {
  return (
    <div className="flex items-center my-2">
      <span className="font-semibold text-custom-yellow capitalize">
        {label} :
      </span>
      <span className="ml-2">{value}</span>
    </div>
  );
}

export default Info;
