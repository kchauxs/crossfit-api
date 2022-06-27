export const handleHttpError = (res, error) => {
  console.log("Error:", error);
  try {
    const errorCode = error.code;
    delete error.code;

    if (errorCode === 11000)
      return res.status(400).json({ status: "FAILED", data: { error: error } });

    if (!error?.data)
      error = { status: "FAILED", data: { error: "Something happened" } };

    res.status(errorCode || 500).send(error);
  } catch (error) {
    res
      .status(500)
      .send({ status: "FAILED", data: { error: " Something happened" } });
  }
};

export default handleHttpError;
