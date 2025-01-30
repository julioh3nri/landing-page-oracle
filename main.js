const menu = document.querySelector('.barra-navegacao');
        const menuIcon = document.querySelector('#icone-menu');
      
        menuIcon.addEventListener('click', () => {
            menu.classList.toggle('active');
        });