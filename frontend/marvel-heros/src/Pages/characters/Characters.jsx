import { useGetAllCharactersQuery } from "../../Utils/redux/service/marvelsData";

const Characters = () => {
  const res = useGetAllCharactersQuery();
  console.log(res);

  return <div>Characters</div>;
};

export default Characters;
