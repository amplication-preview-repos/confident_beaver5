import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ConversationWhereUniqueInput } from "../conversation/ConversationWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type MessageWhereInput = {
  content?: StringNullableFilter;
  conversation?: ConversationWhereUniqueInput;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
};
