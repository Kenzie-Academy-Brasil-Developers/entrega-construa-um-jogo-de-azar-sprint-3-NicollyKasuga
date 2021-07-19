const botao = document.getElementById("botao");
let paragrafo = document.getElementById("paragrafo")
botao.addEventListener('click', function(){
    let choices = ['Com Certeza', 'Sem dúvidas', 'Definitivamente sim','Você pode contar com isso','Pelo que eu vejo, sim', 'Provavelmente', 'Parece bom', 'Sim', 'Sinais apontam que sim', 'Resposta difícil de dizer, tente denovo', 'Pergunte denovo mais tarde', 'Melhor eu não te contar agora...','Não consigo prever agora','Concentre-se e pergunte novamente',' Não conte com isso', 'A resposta é não','Pela minhas persquisas, não', 'Não parece bom', 'Muito duvidoso']
    let tamanho_array = choices.length
    let n_aleatorio = Math.floor(Math.random() * tamanho_array);
    let retorno_aleatorio = choices[n_aleatorio]
    paragrafo.innerHTML = retorno_aleatorio

    return retorno_aleatorio})
