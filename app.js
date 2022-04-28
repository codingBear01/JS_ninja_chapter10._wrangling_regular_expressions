function getTranslateY(el) {
  const transformValue = el.style.transform;

  if (transformValue) {
    const match = transformValue.match(/translateY\(([^\)]+)\)/);
    return match ? match[1] : '';
  }

  return '';
}

const square = document.querySelector('#square');

if (getTranslateY(square) === '15px') console.log('extracted translateY value');
