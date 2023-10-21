export const fetchDestinations = async (): Promise<any> => {
  try {
    const response = await fetch("/destinations.json");
    const res = await response.json();
    console.log("dests:", res);
  } catch (error) {
    console.error("fetching destinations failed");
  }
};
