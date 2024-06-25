import { ConversationParticipantCreateNestedManyWithoutConversationsInput } from "./ConversationParticipantCreateNestedManyWithoutConversationsInput";
import { MessageCreateNestedManyWithoutConversationsInput } from "./MessageCreateNestedManyWithoutConversationsInput";

export type ConversationCreateInput = {
  conversationParticipants?: ConversationParticipantCreateNestedManyWithoutConversationsInput;
  lastMessage?: string | null;
  messages?: MessageCreateNestedManyWithoutConversationsInput;
  topic?: string | null;
};
