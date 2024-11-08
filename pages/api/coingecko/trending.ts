import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { API_ENDPOINTS } from "@/utils/config";

type Data = {
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const response = await axios.get(API_ENDPOINTS.TRENDING);

  res.status(200).json({ data: response.data });
}
