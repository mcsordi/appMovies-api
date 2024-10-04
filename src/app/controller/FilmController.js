import FilmRepositories from "../repositories/FilmRepositories.js";

class FilmController {
  async index(req, res) {
    const el = await FilmRepositories.find();
    res.json(el);
  }
  async find(req, res) {
    const filmId = req.params.id;
    const el = await FilmRepositories.findId(filmId);
    if (el.length == 0) {
      res.status(404);
    }
    res.json(el);
  }

  async category(req, res) {
    const el = await FilmRepositories.findCategories();

    res.json(el);
  }

  async store(req, res) {
    const infoFilm = req.body;
    const el = await FilmRepositories.create(infoFilm);
    res.json(el);
  }
  async delete(req, res) {
    const filmId = req.params.id;
    const el = await FilmRepositories.delete(filmId);
    if (el.affectedRows == 0) {
      res.status(404);
    }
    res.json(el);
  }
  async update(req, res) {
    const filmId = req.params.id;
    const filmInfo = req.body;
    const el = await FilmRepositories.update(filmInfo, filmId);
    if (el.affectedRows == 0) {
      res.status(404);
    }
    return res.json(el);
  }
}

export default new FilmController();
