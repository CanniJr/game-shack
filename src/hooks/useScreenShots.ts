import { useQuery } from "@tanstack/react-query";
import { ScreenShot } from "../entities/ScreenShot";
import APIClient from "../services/api-client";

const useScreeShots = (id: number) => {
  const apiClient = new APIClient<ScreenShot>(`/games/${id}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", id],
    queryFn: apiClient.getAll,
  });
};

export default useScreeShots;
