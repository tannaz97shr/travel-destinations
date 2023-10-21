import { useEffect } from "react";

import { fetchDestinations } from "../../APIs/destinations";

function Search() {
  //   const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchDestinations("p");
      console.log("usee", result);
    };
    fetchData();
    // Fetch data from the fake API
    // fetchDestinations().then((response) => {
    // });
  }, []);

  return <div>This is the search section</div>;
}

export default Search;
