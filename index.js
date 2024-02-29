const URL = 'https://api.fsh.plus/'

class Wrapper {
  call(endpoint, args={}, fargs={}) {
    return new Promise((resolve, reject) => {
      let arg = Object.keys(args).map((key) => `${key}=${args[key]}`);
      arg = '?'+arg.join('&');
      fetch(URL+endpoint+arg, fargs).then(async fe => {
        fe = await fe.text();
        try {
          fe = JSON.parse(fe)
        } catch (err) {/*ignore*/}
        resolve(fe)
      })
    });
  }
}

module.exports = Wrapper;