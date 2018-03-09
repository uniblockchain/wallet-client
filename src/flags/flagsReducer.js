// @flow
import { createFlagsReducer } from 'flag';

const reducer = createFlagsReducer({
  feature: {
    verificationFlow: true,
  },
});

export default reducer;
