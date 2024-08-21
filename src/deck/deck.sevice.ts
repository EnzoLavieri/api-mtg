import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Deck } from './deck.schema';

@Injectable()
export class DeckService {
  constructor(
    private readonly httpService: HttpService,
    @InjectModel(Deck.name) private deckModel: Model<Deck>,
  ) {}

  async fetchCommanderAndCards(commanderName: string): Promise<any> {
    const commander = await this.fetchCard(commanderName);
    const colorIdentity = commander.color_identity;

    const deckCards = await this.fetchCardsByColorIdentity(colorIdentity, 99);

    return { commander, deckCards };
  }

  private async fetchCard(cardName: string): Promise<any> {
    const response = await this.httpService
      .get(`API_URL/cards?name=${cardName}`)
      .toPromise();
    return response.data;
  }

  private async fetchCardsByColorIdentity(
    colorIdentity: string[],
    limit: number,
  ): Promise<any[]> {
    const response = await this.httpService
      .get(
        `API_URL/cards?colorIdentity=${colorIdentity.join(',')}&limit=${limit}`,
      )
      .toPromise();
    return response.data;
  }
}
