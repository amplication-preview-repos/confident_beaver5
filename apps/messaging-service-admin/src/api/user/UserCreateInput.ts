import { ConversationParticipantCreateNestedManyWithoutUsersInput } from "./ConversationParticipantCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  conversationParticipants?: ConversationParticipantCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
