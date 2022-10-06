import type { NextApiRequest, NextApiResponse } from "next";

interface Data {
  color?: string;
  message?: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // Here we store our beautiful & colorful array
  const colorsArray = [
    "#d1e4de",
    "#d1dee4",
    "#d2d0e5",
    "#e6d1d4",
    "#e5dbd2",
    "#eeeade",
    "#ffffff"
  ];

  // If not GET request, deny access
  if (req.method !== "GET") {
    res.status(405).json({
      message: "Only GET requests allowed"
    });
    return;
  }

  // Pick a random color from our beautiful array
  try {
    const random = Math.floor(Math.random() * colorsArray.length);
    res.status(200).json({ color: colorsArray[random] });
  } catch (err) {
    if (err instanceof Error) {
      res.status(200).json({ message: err.message });
    }
  }
}
