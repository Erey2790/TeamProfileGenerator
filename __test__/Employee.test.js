const Employee = require('../lib/Employee');

test('create a new employee object', () => {
    const employee = new Employee ('gollum', '100', 'gollum@precious.com');

    expect(employee.name).toBe('gollum');
    expect(employee.id).toBe('100');
    expect(employee.email).toBe('gollum@precious.com');
});

test('add employees name', () => {
    const employee = new Employee ('gollum', '100', 'gollum@precious.com');

    expect(employee.getName()).toEqual(expect.stringContaining('gollum'));
});

test('add employees id', () => {
    const employee = new Employee ('gollum', '100', 'gollum@precious.com');

    expect(employee.getId()).toEqual(expect.stringContaining('100'));
});

test('add employees email', () => {
    const employee = new Employee ('gollum', '100', 'gollum@precious.com');

    expect(employee.getEmail()).toEqual(expect.stringContaining('gollum@precious.com'));
});

test('add employess role', () => {
    const employee = new Employee ('gollum', '100', 'gollum@precious.com');

    expect(employee.getRole()).toEqual(expect.stringContaining('Employee'));
});