import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";

interface ScreenShot {
  id: number;
  image: string;
}

const useScreeShots = (id: number) => {
  const apiClient = new APIClient<ScreenShot>(`/games/${id}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", id],
    queryFn: apiClient.getAll,
  });
};

export default useScreeShots;
