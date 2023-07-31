import useTrailers from "../hooks/useTrailers";

interface Props {
  id: number;
}

const GameTrailer = ({ id }: Props) => {
  const { data, isLoading, error } = useTrailers(id);

  const first = data?.results[0];

  if (isLoading || !first) return null;
  if (error) throw error;

  return <video src={first.data[480]} poster={first.preview} controls />;
};

export default GameTrailer;
