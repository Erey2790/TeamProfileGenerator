const Intern = require('../lib/Intern');

test('creates the intern object', () => {
    const intern = new Intern ('Frodo', '51', 'frodo@shireuniversity', 'ShireUniversity');

    expect(intern.name).toBe('Frodo');
    expect(intern.id).toBe('51');
    expect(intern.email).toBe('frodo@shireuniversity');
    expect(intern.school).toBe('ShireUniversity');
});

test('gets interns edu', () => {
    const intern = new Intern ('Frodo', '51', 'frodo@shireuniversity', 'ShireUniversity');

    expect(intern.getSchool()).toEqual(expect.stringContaining('ShireUniversity'));
    
});

test('gets interns role', () => {
    const intern = new Intern ('Frodo', '51', 'frodo@shireuniversity', 'ShireUniversity');

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'))

});


