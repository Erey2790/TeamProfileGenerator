const Engineer = require('../lib/Engineer');

test('creates an Engineer object', () => {
    const engineer = new Engineer ('Aragorn', '87', 'aragorn@shire.com', 'aragornHub');

    expect(engineer.name).toBe('Aragorn');
    expect(engineer.id).toBe('87');
    expect(engineer.email).toBe('aragorn@shire.com');
    expect(engineer.github).toBe('aragornHub');

});

test("gets engineers github username", () => {
    const engineer = new Engineer ('Aragorn', '87', 'aragorn@shire.com', 'aragornHub');

    expect(engineer.getGithub()).toEqual(expect.stringConatining('aragornHub'));
});

test("gets engineers role", () => {
    const engineer = new Engineer ('Aragorn', '87', 'aragorn@shire.com', 'aragornHub');

    expect(engineer.getRole()).toEqual(expect.stringConatining('Engineer'));
});