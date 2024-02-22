const home = async (req, res) => {
  try {
    res
      .status(200)
      .send(
        "Welcome to world best mern series by thapa technical using router"
      );
  } catch (error) {
    console.log(error);
  }
};

// Registration logic

const register = async (req, res) => {
  try {
    console.log(req.body);
    res.status(400).send({ massage: req.body });
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};

module.exports = { home, register };
