import { NextApiRequest, NextApiResponse } from "next";
import { swaggerOptions } from "../../swagger";
import swaggerJSDoc, { Options } from "swagger-jsdoc";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	// Defining the Swagger specification options

	const options: Options = {
		...swaggerOptions
	};

	const swaggerSpecDocumentJson = swaggerJSDoc(options);

	res.setHeader("Content-Type", "application/json");

	// Send the Swagger JSON document as the response
	res.status(200).send(swaggerSpecDocumentJson);
}
