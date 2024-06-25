import { ConversationParticipantUpdateManyWithoutConversationsInput } from "./ConversationParticipantUpdateManyWithoutConversationsInput";
import { MessageUpdateManyWithoutConversationsInput } from "./MessageUpdateManyWithoutConversationsInput";

export type ConversationUpdateInput = {
  conversationParticipants?: ConversationParticipantUpdateManyWithoutConversationsInput;
  lastMessage?: string | null;
  messages?: MessageUpdateManyWithoutConversationsInput;
  topic?: string | null;
};
