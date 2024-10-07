const urlSearchParams = new URLSearchParams(window.location.search);
    const messageCustom = urlSearchParams.get('message');

    if (messageCustom) {
      const mainMessageElement = document.querySelector('#mainMessage');
      mainMessageElement.textContent = decodeURI(messageCustom);
    }

    const btnOpenElement = document.querySelector('#open');
    const btnCloseElement = document.querySelector('#close');
    const audioElement = document.querySelector('#loveSong');

    btnCloseElement.disabled = true;

    btnOpenElement.addEventListener('click', () => {
      btnOpenElement.disabled = true;
      btnCloseElement.disabled = false;

      audioElement.play();
    
      const coverElement = document.querySelector('.cover');
      coverElement.classList.add('open-cover');
    
      setTimeout(() => {
        coverElement.style.zIndex = -1;
    
        const paperElement = document.querySelector('.paper');
        paperElement.classList.remove('close-paper');
        paperElement.classList.add('open-paper');
    
        const hearts = document.querySelectorAll('.heart');
        hearts.forEach(heart => {
          heart.style.display = 'block';
        });
        const flower = document.querySelector('.flower');
        flower.style.display = 'block';
      }, 500);
    });

    btnCloseElement.addEventListener('click', () => {
      btnOpenElement.disabled = false;
      btnCloseElement.disabled = true;
    
      const coverElement = document.querySelector('.cover');
      const paperElement = document.querySelector('.paper');
      paperElement.classList.remove('open-paper');
      paperElement.classList.add('close-paper');
    
      // Detener la reproducción del audio
      audioElement.pause();
      audioElement.currentTime = 0;
    
      setTimeout(() => {
        coverElement.style.zIndex = 0;
        coverElement.classList.remove('open-cover');
    
        const hearts = document.querySelectorAll('.heart');
        hearts.forEach(heart => heart.style.display = 'none');
        const flower = document.querySelector('.flower');
        flower.style.display = 'none';
      }, 500);
    });