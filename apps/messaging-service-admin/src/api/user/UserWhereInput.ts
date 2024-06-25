import { ConversationParticipantListRelationFilter } from "../conversationParticipant/ConversationParticipantListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type UserWhereInput = {
  conversationParticipants?: ConversationParticipantListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
};
