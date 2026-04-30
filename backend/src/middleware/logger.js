const loggerMiddleware = (req, res, next) => {
  const start = Date.now();

  res.on("finish", () => {
    const time = new Date().toISOString();
    const duration = Date.now() - start;
    console.log(
      `[${time}] ${req.method} ${req.url} ${res.statusCode} (${duration} ms)`,
    );
  });

  next();
};

export default loggerMiddleware;
