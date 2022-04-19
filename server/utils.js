export const readStream = (stream, encoding = 'utf8') => {
  stream.setEncoding(encoding);
  return new Promise((resolve, reject) => {
    let data = '';
    stream.on('data', (chunk) => {
      data += chunk;
    });
    stream.on('end', () => resolve(data));
    stream.on('error', (error) => reject(error));
  });
};
