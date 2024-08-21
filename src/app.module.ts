import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { DeckModule } from './deck/deck.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017'), DeckModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
