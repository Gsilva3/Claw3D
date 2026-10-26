// Substitui o conteúdo do access-gate.js por algo simples assim:

function createAccessGate(options = {}) {
  return {
    allowUpgrade(req) {
      return true; // Libera todos os WebSockets
    },
    handleHttp(req, res) {
      return false; // Deixa o pedido passar direto para o Next.js sem bloquear
    }
  };
}

module.exports = { createAccessGate };
