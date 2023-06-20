import { MongoClient, MongoClientOptions } from "mongodb";
import { NextApiRequest, NextApiResponse } from "next";
import dotenv from "dotenv";

dotenv.config();

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

		res.status(200).json(user);
		
		client.close();
	} catch (error) {
		console.error("Error retrieving user from database:", error);
		res.status(500).json(error);
	}
}
