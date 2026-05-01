import accountApiRequest from "@/apiRequests/account";
import {
  AccountResType,
  AccountType,
} from "@/schemaValidations/account.schema";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const useAccountProfile = () => {
  return useQuery(
    queryOptions({
      queryKey: ["account-profile"],
      queryFn: accountApiRequest.getMe,
    }),
  );
};
