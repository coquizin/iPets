const User = require("../models/user.js");

module.exports = {
  async store(req, res) {
    const { name, login, password } = req.body;

    const user = await new User({ name, login, password });
    try {
      await user.save();
      // res.redirect("/");
      res.json({
        "usuário salvo": user,
      });
    } catch (error) {
      return res.send(error);
      // res.status(422).redirect("/");
    }
  },

  async get(req, res) {
    const planet = await Planet.findAll();

    return res.json(planet);
  },

  async put(req, res) {
    const { name, size, position } = req.body;
    await Planet.update(
      { name, size, position },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    return res.send("Atualização feita com sucesso!");
  },

  async delete(req, res) {
    await Planet.destroy({
      where: {
        id: req.params.id,
      },
    });
    return res.send("Planeta excluido com sucesso!");
  },
};
