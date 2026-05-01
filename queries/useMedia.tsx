import { mediaApiRequest } from "@/apiRequests/media";
import { useMutation } from "@tanstack/react-query";

export const useMediaUploadMutation = () => {
  return useMutation({
    mutationFn: mediaApiRequest.upload,
  });
};
