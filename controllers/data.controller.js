require("dotenv").config();

const { agms } = require("../models");

const listData = async (req, res) => {
  try {
    const data = await agms.findMany({
      orderBy: {
        id: "asc",
      },
    });

    return res.status(200).json({
      error: false,
      message: "Data berhasil ditampilkan.",
      response: data,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error || "Internal server error.",
    });
  }
};

const createData = async (req, res) => {
  const { username, password } = req.body;
  try {
    const data = await agms.create({
      data: {
        username: username,
        password: password,
      },
    });

    return res.status(201).json({
      error: false,
      message: "Data berhasil ditambahkan.",
      response: data,
    });
  } catch (error) {
    return res.status(500).json({
      error: true,
      message: error || "Internal server error.",
    });
  }
};

module.exports = {
  listData,
  createData,
};
