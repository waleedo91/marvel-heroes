// Components
import { useSearchParams } from "react-router-dom";
import { useGetAllCharactersQuery } from "../../Utils/redux/service/marvelsData";
import SearchResults from "../../Components/searchResults/SearchResults";
import Loading from "../../Components/loading/Loading";

// Styling
import "./SearchPage.css";

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("query") || "";
  const {
    data: characters = [],
    isLoading,
    error,
  } = useGetAllCharactersQuery();

  const filtered = characters.filter((char) =>
    char.name.toLowerCase().includes(query.toLowerCase())
  );

  if (isLoading) return <Loading />;
  if (error) return null;

  return (
    <div className="query-container">
      <h2>Search Results for: "{query}"</h2>
      <SearchResults results={filtered} />
    </div>
  );
};

export default SearchPage;
