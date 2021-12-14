import Axios from "axios";
import applyCaseMiddleware from "axios-case-converter";

export const axiosInstance = applyCaseMiddleware(Axios.create(), {
  caseFunctions: {
    camel: (input) =>
      (input.charAt(0).toLowerCase() + input.slice(1)).replace(
        /[-_]([a-zA-Z])/g,
        (match, group1) => group1.toUpperCase()
      ),
  },
});
