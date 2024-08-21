import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Deck extends Document {
  @Prop({ required: true })
  commander: string;

  @Prop({ required: true })
  cards: string[];

  @Prop({ default: Date.now })
  createdAt: Date;
}

export const DeckSchema = SchemaFactory.createForClass(Deck);
