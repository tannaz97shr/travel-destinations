import {
  IDestination,
  IDestinationDetailsResponse,
} from "../models/destinations";

export const fetchAllDestinations = async (): Promise<{
  destinations?: IDestination[];
  errorMessage?: string;
}> => {
  try {
    const response = await fetch("/destinations.json");
    const destArray = await response.json();
    return {
      destinations: destArray,
    };
  } catch (error) {
    console.error("fetching destinations failed");
    return {
      errorMessage: "fetching destinations failed",
    };
  }
};

export const fetchDestinations = async (
  input: string
): Promise<{ destinations?: IDestination[]; errorMessage?: string }> => {
  console.log(
    "Approximate Endpoint : ",
    // eslint-disable-next-line no-template-curly-in-string
    "`${SERVER_URL}/destinations?filter[name][_contains]=${input}`"
  );
  try {
    if (input.toLocaleLowerCase() === "fail") {
      throw new Error();
    }
    const response = await fetch("/destinations.json");
    const destArray = await response.json();
    return {
      destinations: destArray.filter((dest: IDestination) =>
        dest.name.toLocaleLowerCase().includes(input)
      ),
    };
  } catch (error) {
    console.error("fetching destinations failed");
    return {
      errorMessage: "fetching destinations failed",
    };
  }
};

export const fetchDestinationById = async (
  id: number
): Promise<IDestinationDetailsResponse> => {
  console.log(
    "Approximate Endpoint : ",
    // eslint-disable-next-line no-template-curly-in-string
    "`${SERVER_URL}/destinations?filter[id][_eq]=${id}`"
  );
  try {
    const response = await fetch("/destinations.json");
    const destArray: IDestination[] = await response.json();
    if (!destArray.find((dest: IDestination) => dest.id === id)) {
      throw new Error();
    }
    return {
      destination: destArray.find((dest: IDestination) => dest.id === id),
    };
  } catch (error) {
    console.error("fetching destinations failed");
    return {
      errorMessage: "fetching destinations failed",
    };
  }
};
