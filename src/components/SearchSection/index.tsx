import { useEffect, useState } from "react";

import { fetchDestinations } from "../../APIs/destinations";
import { IDestination } from "../../models/destinations";
import { IconSearch } from "./icons";

function Search() {
  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedInputValue, setDebouncedInputValue] = useState("");
  const [destinationsList, setDestinationsList] = useState<IDestination[]>([]);

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue]);

  useEffect(() => {
    const fetchData = async (input: string) => {
      const result = await fetchDestinations(input.toLocaleLowerCase());
      if (result.destinations.length) setDestinationsList(result.destinations);
    };
    fetchData(debouncedInputValue);
  }, [debouncedInputValue]);

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value.toLocaleLowerCase());
  };

  return (
    <div
      className="flex w-full h-40 rounded-lg p-4
    bg-secondary border border-custom-pink"
    >
      <form className="w-full">
        <label htmlFor="destination-search" className="font-semibold mb-6">
          Locations
        </label>
        <div className="relative mt-6">
          <div className="absolute flex items-center inset-y-0 left-0 pl-3 pointer-events-none">
            <IconSearch fill="#451952" />
          </div>
          <input
            onChange={onInputChange}
            type="search"
            id="destination-search"
            className="block w-full p-4 pl-10 text-sm border rounded-lg
            bg-gray-700 border-gray-600 placeholder-gray-400 text-light
            focus:ring-custom-pink focus:border-custom-pink"
            placeholder="Search Travel Destinations ..."
            required
          />
        </div>
      </form>
    </div>
  );
}

export default Search;
