const link1 = document.querySelector('a[href="#sobre"]');

link1.addEventListener('click', (event) => {
    event.preventDefault();

    const section = document.getElementById('sobre');
    section.scrollIntoView({ behavior: 'smooth' });
});

const link2 = document.querySelector('a[href="#skills"]');

link2.addEventListener('click', (event) => {
    event.preventDefault();

    const section = document.getElementById('skills');
    section.scrollIntoView({ behavior: 'smooth' });
});

const link3 = document.querySelector('a[href="#projetos"]');

link3.addEventListener('click', (event) => {
    event.preventDefault();

    const section = document.getElementById('projetos');
    section.scrollIntoView({ behavior: 'smooth' });
});

const link4 = document.querySelector('a[href="#contato"]');

link4.addEventListener('click', (event) => {
    event.preventDefault(); 

    const section = document.getElementById('contato');
    section.scrollIntoView({ behavior: 'smooth' });
});

