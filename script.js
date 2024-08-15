//Navegação de sections
document.addEventListener('DOMContentLoaded', function() {
    // Captura todos os links com a classe 'link-secao'
    document.querySelectorAll('.link-nav').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Evita o comportamento padrão do link
            
            // Obtém o valor do atributo 'data-target' do link clicado
            const targetSelector = this.getAttribute('data-target');
            
            // Seleciona o elemento com base no seletor obtido
            const targetElement = document.querySelector(targetSelector);
            
            // Rola suavemente para o elemento selecionado
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});

//Download Curriculo
document.getElementById('download').addEventListener('click', function() {
    const url = 'files/Curriculo.pdf';
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Curriculo.pdf'; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});