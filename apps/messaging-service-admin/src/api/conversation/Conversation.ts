import { ConversationParticipant } from "../conversationParticipant/ConversationParticipant";
import { Message } from "../message/Message";

export type Conversation = {
  conversationParticipants?: Array<ConversationParticipant>;
  createdAt: Date;
  id: string;
  lastMessage: string | null;
  messages?: Array<Message>;
  topic: string | null;
  updatedAt: Date;
};
