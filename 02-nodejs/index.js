/*
0- Obter um usuario
1- Obter o numero de um telefone de um usuario apartir do seu id
2- obter o endereco do usuartio pelo id
*/

function obterUsuario(callback) {
    setTimeout(function (){
        return callback(null, {
            id: 1,
            nome: 'Aladin',
            dataNascimento: new Date()
        })
    }, 1000)
}

function obterTelefone(idUsuario, callback){
    setTimeout(function (){
        return callback(null, {
            telefone: '119906',
            ddd: 11
        })
    }, 2000);

}

function obterEndereco(idUsuario, callback){
    setTimeout(() => {
        return callback(null, {
        rua: 'dos bobos',
        numero: 0
    })
    }, 20000);
}
function resolverUsuario(erro, usuario){
    console.log('usuario', usuario)
}

obterUsuario(function resolverUsuario(error, usuario){
    // null || "" || 0 === false
    if(error) {
        console.error('DEU RUIM em USUARIO', error)
        return;
    }
    obterTelefone(usuario.id, function resolverTelefone(error1, telefone){
        if(error1) {
            console.error('DEU RUIM em TELEFONE', error)
            return;
        }
        obterEndereco(usuario.id, function resolverEndereco(error2, endereco){
            if(error2) {
                console.error('DEU RUIM em ENDERECO', error)
                return;
            } 

            console.log(`
            Nome: ${usuario.nome},
            Endereco: ${endereco.rua}, ${endereco.numero}
            Telefone: (${telefone.ddd})${telefone.telefone}
            `)
        })
    })
})
// const telefone = obterTelefone(usuario.id)


// console.log('telefone', telefone)

