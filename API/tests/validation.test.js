const Constants = require('../src/utils/Constants');
const Validation = require('../src/utils/validation');

test('Caso válido', () => {
    const result = Validation.create({
        name: "Jorge",
        band: "Jorge e Mateus"
    });
    expect(result).toEqual(undefined);
});

test('Caso inválido - Retirando nome', () => {
    const result = Validation.create({
        band: "Jorge e Mateus"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
