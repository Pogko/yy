async function before(m) {
  const commands = Object.values(global.plugins).flatMap((plugin) => [].concat(plugin.command));
  const presenceStatus = commands.some((cmd) => (cmd instanceof RegExp ? cmd.test(m.text) : m.text.includes(cmd))) ? 'composing' : 'composing';
  if (presenceStatus) await this.sendPresenceUpdate(presenceStatus, m.chat);
}

module.exports = {
    before,
}