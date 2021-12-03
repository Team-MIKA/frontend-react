import type { NextApiRequest, NextApiResponse } from "next";

export interface Data {
    id: string;
    title: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data[]>) {
    res.status(200).json([
        { id: "1234", title: "Ordre1" },
        { id: "5678", title: "Ordre2" },
        { id: "9101", title: "Ordre3" },
    ]);
}
