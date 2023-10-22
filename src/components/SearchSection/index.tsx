import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { fetchDestinationsByName } from "../../APIs/destinations";
import { IDestination } from "../../models/destinations";
import ListModal from "./ListModal";
import { IconSearch } from "./icons";

function Search() {
  const [inputValue, setInputValue] = useState<string>("");
  const [debouncedInputValue, setDebouncedInputValue] = useState("");
  const [destinationsList, setDestinationsList] = useState<IDestination[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputError, setInputError] = useState<string>("");
  let { destinationId } = useParams();

  useEffect(() => {
    setInputValue("");
    setDebouncedInputValue("");
    setDestinationsList([]);
  }, [destinationId]);

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      setDebouncedInputValue(inputValue);
    }, 500);
    return () => clearTimeout(delayInputTimeoutId);
  }, [inputValue]);

  useEffect(() => {
    if (!debouncedInputValue) {
      setDestinationsList([]);
      setInputError("");
      return;
    }

    const fetchData = async (input: string) => {
      const result = await fetchDestinationsByName(input);
      if (result.destinations) {
        setDestinationsList(result.destinations);
        setInputError("");
      }
      if (result.destinations?.length === 0)
        setInputError("No destination matches.");
      if (result.errorMessage) setInputError(result.errorMessage);
      setTimeout(() => {
        console.log("waiting...");
      }, 1000);
    };
    if (debouncedInputValue) {
      setIsLoading(true);
      fetchData(debouncedInputValue);
      setIsLoading(false);
    }
  }, [debouncedInputValue]);

  const onInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    setInputValue(e.currentTarget.value.toLocaleLowerCase());
  };

  const resetInput = () => {
    setInputValue("");
  };

  return (
    <div
      className="flex flex-col w-full h-40 rounded-lg p-4
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
            autoComplete="off"
            onChange={onInputChange}
            type="search"
            id="destination-search"
            className={`block w-full p-4 pl-10 text-sm border rounded-lg
            bg-gray-700 ${
              inputError ? "border-red-500" : "border-gray-600"
            } placeholder-gray-400 text-light
            focus:ring-custom-pink focus:border-custom-pink`}
            placeholder="Search Travel Destinations ..."
            required
          />
        </div>
        {inputError ? (
          <span className="text-red-500 mt-2">{inputError}</span>
        ) : null}
      </form>
      {destinationsList.length ? (
        <ListModal
          resetInput={resetInput}
          locations={destinationsList}
          loading={isLoading}
        />
      ) : null}
    </div>
  );
}

export default Search;
