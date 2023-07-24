function funck(delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const square = document.createElement('div');
        square.className = 'square';
        document.getElementById('container').appendChild(square);
        resolve(); 
      }, delay);
    });
  }
  
  async function funck2() {
    for (let i = 0; i < 4; i++) {
      await funck(1000); 
    }
  }
  
  funck2();
  