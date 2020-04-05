const commando = require('discord.js-commando');

// cria a classe CoinFlip a partir da classe command.Command
class CoinFlipCommand extends commando.Command
{
    // construindo o PAI //client é o argumento do construtor
    constructor(client)
    {
        // chama o construtor do pai (herança 'FILHOS')
        super(client,{
            name:,
            group: 'simple',
            memberName:
            this.description:

        })
    }
}