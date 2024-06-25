/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ConversationWhereInput } from "./ConversationWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ConversationListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ConversationWhereInput,
  })
  @ValidateNested()
  @Type(() => ConversationWhereInput)
  @IsOptional()
  @Field(() => ConversationWhereInput, {
    nullable: true,
  })
  every?: ConversationWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConversationWhereInput,
  })
  @ValidateNested()
  @Type(() => ConversationWhereInput)
  @IsOptional()
  @Field(() => ConversationWhereInput, {
    nullable: true,
  })
  some?: ConversationWhereInput;

  @ApiProperty({
    required: false,
    type: () => ConversationWhereInput,
  })
  @ValidateNested()
  @Type(() => ConversationWhereInput)
  @IsOptional()
  @Field(() => ConversationWhereInput, {
    nullable: true,
  })
  none?: ConversationWhereInput;
}
export { ConversationListRelationFilter as ConversationListRelationFilter };
