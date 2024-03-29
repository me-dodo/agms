require("dotenv").config();

const { agms } = require("../models");

const listData = async (req, res) => {
  try {
    const data = await agms.findMany({
      orderBy: {
        id: "asc",
      },
      select: {
        username: true,
        password: true,
        createdAt: true,
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
    await agms.create({
      data: {
        username: username,
        password: password,
      },
    });

    return res.redirect("https://agms.my.id");
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
