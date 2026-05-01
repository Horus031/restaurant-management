import http from "@/lib/http";
import { AccountResType } from "@/schemaValidations/account.schema";

export const accountApiRequest = {
  getMe: () => http.get<AccountResType>("/accounts/me"),
};

export default accountApiRequest;
