import { IDestinations } from "../models/destinations";

export const fetchDestinations = async (
  input: string
): Promise<IDestinations[] | { errorMessage: string }> => {
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
    return destArray.filter((dest: IDestinations) =>
      dest.name.toLocaleLowerCase().includes(input)
    );
  } catch (error) {
    console.error("fetching destinations failed");
    return {
      errorMessage: "fetching destinations failed",
    };
  }
};
