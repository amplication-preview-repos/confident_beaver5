import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";

export type MessageUpdateInput = {
  content?: string | null;
  conversation?: ConversationWhereUniqueInput | null;
  timestamp?: Date | null;
};
