import { Conversation } from "../conversation/Conversation";

export type Message = {
  content: string | null;
  conversation?: Conversation | null;
  createdAt: Date;
  id: string;
  timestamp: Date | null;
  updatedAt: Date;
};
