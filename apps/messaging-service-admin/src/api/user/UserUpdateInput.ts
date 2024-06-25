import { ConversationParticipantUpdateManyWithoutUsersInput } from "./ConversationParticipantUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  conversationParticipants?: ConversationParticipantUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
