export const adminVerify = (req, res, next) => {
  try {
    console.log("asd");
    if (!process.env.ADMIN_ACCESS_TOKEN_SECRET)
      throw new Error("Jwt access token is not provided in env");
    if (!req.headers.authorization)
      throw { status: 401, message: "Unauthorized" };
    const accessToken = req.headers.authorization;
    const user = jwt.verify(accessToken, process.env.ADMIN_ACCESS_TOKEN_SECRET);
    console.log("```user``` : ", typeof user);
    req.admin = user;
    next();
  } catch (e) {
    console.table(e);
    if (e.name === "TokenExpiredError" && e.message === "jwt expired") {
      res.status(401).json(e);
    }
    res.status(e.status || 500).json(e.message);
  }
};
