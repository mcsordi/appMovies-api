import { films } from "../database/connection.js";
class FilmRepositories {
  find(params) {
    const sql = "SELECT * FROM appMovies";
    return films(sql, params, "Filme não localizado");
  }
  findId(id) {
    const sql = "select * from appMovies where id = ?";
    return films(sql, id, "Id não encontrado");
  }
  create(film) {
    const sql = "insert into appMovies set ? ";
    return films(sql, film, "Erro ao adicionar filme");
  }
  delete(id) {
    const sql = "delete from appMovies where id = ? ";
    return films(sql, id, "Id não encontrado");
  }
  update(film, id) {
    const sql = "update appMovies set ? where id = ? ";
    return films(sql, [film, id], "Id não encontrado");
  }
}

export default new FilmRepositories();
