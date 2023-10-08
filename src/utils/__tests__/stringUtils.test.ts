import {stringUtils} from '@utils';
test('capitalizeFirstLetter', () => {
  // escrever meu teste
  stringUtils.capitalizeFirstLetter('Ana maria'); // Ana Maria
  stringUtils.capitalizeFirstLetter('ANA MARIA'); // Ana Maria
  stringUtils.capitalizeFirstLetter('MaRIA'); // Maria

  const nome = stringUtils.capitalizeFirstLetter('Ana eduarda');

  expect(nome).toBe('Ana Eduarda');
});
