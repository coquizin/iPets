const User = require("../models/user.js");

module.exports = {
  async sigIn(req, res) {
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

  async login(req, res) {
    const { email } = req.body;
    const { password } = req.body;
    const user = await User.find({ email: email }).exec();
    const exists = await User.exists({ email: email });
    if (!exists) {
      return res.json({ erro: true });
    }
    if (user[0].password === password) {
      return res.json({
        erro: false,
        mensagem: "Usuário logado com sucesso!",
      });
    } else {
      return res.json({ erro: "Senha incorreta" });
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

  async edit(req, res) {},

  async delete(req, res) {},
};
