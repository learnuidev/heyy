import { useAuth } from "@clerk/nextjs";
import { useQuery } from "@tanstack/react-query";

export const useGetAuthToken = () => {
  const { getToken } = useAuth();
  return useQuery({
    queryKey: ["get-auth-token"],
    queryFn: async () => {
      return await getToken();
    },
  });
};
