const numeroInput = document.getElementById("numero");
const nomeInput = document.getElementById("nome");
const mesInput = document.getElementById("validadeMes");
const anoInput = document.getElementById("validadeAno");
const cvcInput = document.getElementById("cvc");

nomeInput.addEventListener("input", function() {
    let regex = /^[a-zA-z-" "-""-]+$/;
    let nomeCartao = this.value;
    nomeCartao = nomeCartao.slice(0,13);
    document.getElementById("nomeCartao").textContent = nomeCartao || "Nome do Titular";
    if (!regex.test(nomeInput.value)){
        document.getElementById("erroNome").classList.add("active");
        document.getElementById("nomeCartao").textContent = "Nome do Titular";
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
    let mes = this.value;
    let regex = /^[0-9]+$/;
    document.getElementById("validadeCartaoMes").textContent = mes || "MM";
    if ((mes < 1 || mes > 12 && mes.length == 2) || !regex.test(mes)) {
        document.getElementById("erroMes").classList.add("active");
        document.getElementById("validadeCartaoMes").textContent = "MM";
    } else {
        document.getElementById("erroMes").classList.remove("active");
    }
    if (mes == "") {
        document.getElementById("erroMes").classList.remove("active");
    }
}
);

anoInput.addEventListener("input", function() {
    let ano = this.value;
    let regex = /^[0-9]+$/;
    document.getElementById("validadeCartaoAno").textContent = ano || "AA";
    if ((ano < 25 || ano > 38 && ano.length == 2) || !regex.test(ano)) {
        document.getElementById("erroAno").classList.add("active");
        document.getElementById("validadeCartaoAno").textContent = "AA";
    } else {
        document.getElementById("erroAno").classList.remove("active");
    }
    if (ano == "") {
        document.getElementById("erroAno").classList.remove("active");
    }
}
);

cvcInput.addEventListener("input", function () {
    let cvc = this.value;
    let regex = /^[0-9]+$/;
    document.getElementById("cvcCartao").textContent = cvc || "000";
    if (!regex.test(cvc)) {
        document.getElementById("erroNumeroCVC").classList.add("active");
        document.getElementById("cvcCartao").textContent = "000";
    } else {
        document.getElementById("erroNumeroCVC").classList.remove("active");
    }
    if (cvc == "") {
        document.getElementById("erroNumeroCVC").classList.remove("active");
    }
}
);