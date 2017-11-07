export default function(text, concat){
  let wordArray= text.split(' ');
  if(concat === 'snakeCase')  return toSnake(wordArray);
  if(concat === 'kebabCase') return toKebab(wordArray);
  if(concat === 'camelCase') return toCamel(wordArray);

  function toSnake(text){
    return text.join('_');
  }

  function toKebab(text){
    return text.join('-');
  }

  function toCamel(text){
    const camelized = [];
    text.forEach(value =>{
      let letters = value.split('');
      if(letters[0]) letters[0]=letters[0].toUpperCase();
      camelized.push(letters.join(''));
    });
    return camelized.join('');
  }
}