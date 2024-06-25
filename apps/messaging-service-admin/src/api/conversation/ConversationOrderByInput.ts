import { SortOrder } from "../../util/SortOrder";

export type ConversationOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  lastMessage?: SortOrder;
  topic?: SortOrder;
  updatedAt?: SortOrder;
};
