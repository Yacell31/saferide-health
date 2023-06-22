import { MongoClient, MongoClientOptions } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";
import User from "@/models/User";

dotenv.config();
/**
 * @swagger
 * /api/authenticate:
 *   post:
 *     summary: User login
 *     description: Authenticates a user by their username and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *                 description: User's username
 *               password:
 *                 type: string
 *                 description: User's password
 *             required:
 *               - username
 *               - password
 *     responses:
 *       200:
 *         description: Successful login
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 userName:
 *                   type: string
 *                   description: User's username
 *                 logIn:
 *                   type: boolean
 *                   description: User's login status
 *       401:
 *         description: Unauthorized access
 *       500:
 *         description: Internal server error
 */

export default async function (req: NextApiRequest, res: NextApiResponse) {
	const { username, password } = req.body;
	const mongoURI = process.env.MONGO_URI!;
	const dbName = process.env.DB_NAME!;
	const collectionName = process.env.COLLECTION_NAME!;

	try {
		const client = new MongoClient(mongoURI, {
			useUnifiedTopology: true,
		} as MongoClientOptions);

		await client.connect();
		const db = client.db(dbName);
		const collection = db.collection(collectionName);


		const user = await collection.findOne({ username, password });

		if (user) {
			res.status(200).json({ userName: user?.username, logIn: true });
		} else {
			res.status(200).json(null);
		}

		client.close();
	} catch (error) {
		console.error("Error retrieving user from database:", error);
		res.status(500).json(error);
	}
}
