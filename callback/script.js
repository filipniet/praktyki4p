const p = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Udało się!');
    }, 5000);
  });
  
  p.then((result) => {console.log(result);});
  