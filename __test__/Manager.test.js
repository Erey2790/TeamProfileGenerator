const Manager = require('../lib/Manager');

test('creates a manager object', () => {
    const manager = new Manager ('Gandalf', '24000', 'gandalf@wizard.com', 'W214');

    expect(manager.name).toBe('Gandalf');
    expect(manager.id).toBe('24000');
    expect(manager.email).toBe('gandalf@wizard.com');
    expect(manager.office).toBe('W214');
})

test('gets employees role', () => {
    const manager = new Manager ('Gandalf', '24000', 'gandalf@wizard.com', 'W214')

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'));
})