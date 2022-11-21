const {SlashCommandBuilder} = reuqire('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('Team')
        .setDescriptor('Returns team info'),
    async execute(interaction) {
        await interaction.reply("Which team");
    },
};