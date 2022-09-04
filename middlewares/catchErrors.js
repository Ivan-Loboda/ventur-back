module.exports.catchErrors = middleware => {
    return async (req, res) => {
      try {
        await middleware(req, res);
      } catch (err) {
        console.log(err)
        return await res.status(400).json({ status: "Bad Request" });
      }
    };
  };