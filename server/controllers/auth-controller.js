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
    res.status(400).send("controll register");
  } catch (error) {
    res.status(400).send({ msg: "page not found" });
  }
};

module.exports = { home, register };
