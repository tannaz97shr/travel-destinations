import { useEffect } from "react";

import { fetchDestinations } from "../../APIs/destinations";

function Search() {
  //   const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchDestinations();
    };
    fetchData();
    // Fetch data from the fake API
    // fetchDestinations().then((response) => {
    // });
  }, []);

  return <div>This is the search section</div>;
}

export default Search;
