import seedService from "../services/seedService.js";
import { handleHttpError } from "../utils/helpers/handleError.js";

export const runSeed = async (_, res) => {
  try {
    const message = await seedService.runSeed();
    return res.status(200).send({ status: "OK", data: message });
  } catch (error) {
    handleHttpError(res, error);
  }
};

export default {
  runSeed,
};
