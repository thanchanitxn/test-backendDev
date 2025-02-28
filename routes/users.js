const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - name
 *         - email
 *         - password
 *       properties:
 *         id:
 *           type: integer
 *           description: Auto-generated ID ของผู้ใช้
 *         name:
 *           type: string
 *           description: ชื่อของผู้ใช้
 *         email:
 *           type: string
 *           description: อีเมลของผู้ใช้ (ต้องไม่ซ้ำกัน)
 *         password:
 *           type: string
 *           description: รหัสผ่านของผู้ใช้ (เข้ารหัสแล้ว)
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: เวลาที่สร้างผู้ใช้
 */

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: สร้างผู้ใช้ใหม่
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: สร้างผู้ใช้สำเร็จ
 */
router.post('/users', userController.createUser);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: ดึงข้อมูลผู้ใช้ทั้งหมด
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: รายชื่อผู้ใช้ทั้งหมด
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
router.get('/users', userController.getAllUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: ดึงข้อมูลผู้ใช้ตาม ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID ของผู้ใช้
 *     responses:
 *       200:
 *         description: ข้อมูลของผู้ใช้
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: ไม่พบผู้ใช้
 */
router.get('/users/:id', userController.getUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: อัปเดตข้อมูลผู้ใช้
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID ของผู้ใช้
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: ชื่อใหม่ของผู้ใช้
 *               email:
 *                 type: string
 *                 description: อีเมลใหม่ของผู้ใช้
 *     responses:
 *       200:
 *         description: อัปเดตข้อมูลสำเร็จ
 */
router.put('/users/:id', userController.updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: ลบผู้ใช้
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID ของผู้ใช้
 *     responses:
 *       200:
 *         description: ลบผู้ใช้สำเร็จ
 */
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
