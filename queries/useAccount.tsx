import accountApiRequest from "@/apiRequests/account";
import {
  AccountResType,
  AccountType,
} from "@/schemaValidations/account.schema";
import { queryOptions, useMutation, useQuery } from "@tanstack/react-query";

export const useGetMeQuery = () => {
  return useQuery(
    queryOptions({
      queryKey: ["account-profile"],
      queryFn: accountApiRequest.getMe,
    }),
  );
};

export const useUpdateMeMutation = () => {
  return useMutation({
    mutationFn: accountApiRequest.updateMe,
  });
};

export const useChangePasswordMutation = () => {
  return useMutation({
    mutationFn: accountApiRequest.changePasswordV2,
  });
};
