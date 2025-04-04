document.getElementById("nome").addEventListener("input", function() {
    document.getElementById("nomeCartao").textContent = this.value || "Nome do Titular";
    }
);