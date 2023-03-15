import connect from "../../../utils/database";
import User from "../../models/user";

export default async function handler(req: any, res: any) {
  const { db } = await connect();

  const { name, login, password } = req.body;
  const user = new User({ name, login, password });

  const response = await db.collection("user").insertOne(user);

  res.status(200).json(response);
}
