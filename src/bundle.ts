import { rpc } from "./rpc";
import { types as v27Types } from "./v27";

const bundle = {
  spec: {
    'dock-pos-main-runtime': {
      types: [
        {
          minmax: [27],
          types: v27Types,
        }
      ],
      rpc
    },
    'dock-pos-test-runtime': {
      types: [
        {
          minmax: [27],
          types: v27Types,
        }
      ],
      rpc
    },
    'dock-pos-dev-runtime': {
      types: [
        {
          minmax: [27],
          types: v27Types,
        }
      ],
      rpc
    }
  },
};

export { bundle };
