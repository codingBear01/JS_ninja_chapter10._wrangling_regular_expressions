function compress(source) {
  const keys = {};

  source.replace(/([^=&]+)=([^&]*)/g, function (full, key, value) {
    console.log(keys);
    keys[key] = (keys[key] ? keys[key] + ',' : '') + value;
    return '';
  });

  const result = [];

  for (let key in keys) {
    result.push(key + '=' + keys[key]);
  }
  return result.join('&');
}

if (compress('foo=1&foo=2&blah=a&blah=b&foo=3') === 'foo=1,2,3&blah=a,b')
  console.log('Okay!');
