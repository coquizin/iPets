const User = require("../models/user.js");

module.exports = {
  async post(req, res) {
    const { email } = req.body;
    const { password } = req.body;
    const user = new User({ email: email, password: password });
    const exists = await User.exists({ email: email });
    if (!exists) {
      user.save();
      return res.json({
        erro: false,
        mensagem: "Usuário salvo com sucesso!",
      });
    } else {
      return res.json({ erro: "Email já cadastrado" });
    }
  },

  async get(req, res) {
    const documents = await User.find();
    if (documents) {
      return res.json({
        documents: documents,
      });
    } else {
      return res.json({ erro: "Não há usuários cadastrados ainda" });
    }
  },
};
