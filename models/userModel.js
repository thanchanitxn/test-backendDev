const db = require('../db');

const User = {
  create: async (name, email, hashedPassword) => {
    const sql = `INSERT INTO users (name, email, password) VALUES (?, ?, ?)`;
    return db.execute(sql, [name, email, hashedPassword]);
  },

  findById: async (id) => {
    const sql = `SELECT id, name, email, created_at FROM users WHERE id = ?`;
    const [rows] = await db.execute(sql, [id]);
    return rows[0];
  },

  findAll: async () => {
    const sql = `SELECT id, name, email, created_at FROM users`;
    const [rows] = await db.execute(sql);
    return rows;
  },

  update: async (id, name, email) => {
    const sql = `UPDATE users SET name = ?, email = ? WHERE id = ?`;
    return db.execute(sql, [name, email, id]);
  },

  delete: async (id) => {
    const sql = `DELETE FROM users WHERE id = ?`;
    return db.execute(sql, [id]);
  }
};

module.exports = User;
