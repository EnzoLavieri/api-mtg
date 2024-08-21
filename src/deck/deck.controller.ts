import { Controller, Get, Post, Body } from '@nestjs/common';
import { DeckService } from './deck.sevice';

@Controller('deck')
export class DeckController {
  constructor(private readonly deckService: DeckService) {}

  @Post()
  async createDeck(@Body('commander') commander: string) {
    const deck = await this.deckService.fetchCommanderAndCards(commander);
    return deck;
  }

  @Get()
  async getDeck() {
    // Implementar a lógica para buscar o deck do banco de dados
  }
}
