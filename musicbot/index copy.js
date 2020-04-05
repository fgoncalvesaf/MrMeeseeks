const Commando = require('discord.js-commando');

class JoinChannelCommand extends Commando.Commando
{
	constructor(client)
	{
        super(cleint,{
			name: 'join',
			group: 'music',
			MemberName: 'join',
			Description: 'Join the voice channel of the commander'	
		});
	}

	async rum(message, args)
	{
		if(message.member.voiceChannel)
		{
			if(message.guild.voiceConnection)
			{
				message.member.voiceChannel.join()
					.then(connection =>{
						message.reply('Successfully Joined');
					})
			}

		}
		else
		{
			message.reply('You must be in a voice channel to summon me!')
		}
		
		
	}
}

module.exports = JoinChannelCommand;