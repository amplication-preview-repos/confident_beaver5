import { ConversationParticipantListRelationFilter } from "../conversationParticipant/ConversationParticipantListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { MessageListRelationFilter } from "../message/MessageListRelationFilter";

export type ConversationWhereInput = {
  conversationParticipants?: ConversationParticipantListRelationFilter;
  id?: StringFilter;
  lastMessage?: StringNullableFilter;
  messages?: MessageListRelationFilter;
  topic?: StringNullableFilter;
};
