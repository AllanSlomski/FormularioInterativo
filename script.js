const numeroInput = document.getElementById("numero");
const nomeInput = document.getElementById("nome");
const mesInput = document.getElementById("validadeMes");
const anoInput = document.getElementById("validadeAno");

nomeInput.addEventListener("input", function() {
    let regex = /^[a-zA-z-" "-""]+$/;
    let nomeCartao = this.value;
    nomeCartao = nomeCartao.slice(0,13);
    document.getElementById("nomeCartao").textContent = nomeCartao || "Nome do Titular";
    if (!regex.test(nomeInput.value)){
        document.getElementById("erroNome").classList.add("active");
    } else {
        document.getElementById("erroNome").classList.remove("active");
    }
    if (nomeInput.value == ""){
        document.getElementById("erroNome").classList.remove("active");
    }
}
);

numeroInput.addEventListener("input", function() {
    let numeroCartao = this.value.replace(/\D/g, "");
    numeroCartao = numeroCartao.slice(0, 16);
    numeroCartao = numeroCartao.replace(/(.{4})/g, "$1 ").trim();
    document.getElementById("numeroCartao").textContent = numeroCartao || "0000 0000 0000 0000";
    let regex = /^[0-9]+$/;
    if (!regex.test(numeroInput.value)){
        document.getElementById("erroNumero").classList.add("active");
    } else {
        document.getElementById("erroNumero").classList.remove("active")
    }
    if (numeroInput.value == ""){
        document.getElementById("erroNumero").classList.remove("active");
    }
    }
);

mesInput.addEventListener("input", function() {
    
}
);