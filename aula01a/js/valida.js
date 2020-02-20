function validar(){
    var elementoNome = formSignUp.nome.value;
    var elementoEmail = formSignUp.email.value;
    var elementoCelular = formSignUp.celular.value;
    var elementoSenha = formSignUp.senha.value;
    var elementoConfirm = formSignUp.confirm_senha.value;

    var elementoErro = document.getElementById('msg_erro');
    console.log(elementoNome);

    if (elementoNome == ''){
        //alert('Campo nome Vazio');
        elementoErro.innerHTML = 'Campo vazio'
        formSignUp.nome.focus();
        return false;
    }


    if (elementoNome.length < 3 ){
        //alert('Campo confirm Vazio');
        elementoErro.innerHTML = 'Digite nome completo'
        formSignUp.nome.focus();
        return false;
    }


    if (elementoEmail == ''){
        //alert('Campo email Vazio');
        elementoErro.innerHTML = 'Campo vazio'
        formSignUp.email.focus();
        return false;
    }

    if (elementoCelular == ''){
        //alert('Campo nome Vazio');
        elementoCelular.innerHTML = 'Digite numero de aparelho celular'
        formSignUp.celular.focus();
        return false;
    }
    
    if (elementoSenha == ''){
        //alert('Campo senha Vazio');
        elementoErro.innerHTML = 'Campo vazio'
        formSignUp.senha.focus();
        return false;
    }
    
    if (elementoConfirm == ''){
        //alert('Campo confirm Vazio');
        elementoErro.innerHTML = 'Campo vazio'
        formSignUp.confirm_senha.focus();
        return false;
    }

    if (elementoSenha != elementoConfirm){
        //alert('Campo confirm Vazio');
        elementoErro.innerHTML = 'Senhas Diferentes'
        return false;
    }

    elementoErro.innerHTML = 'Elemento preenchido corretamente'

}

