// @flow
import { createFlagsReducer } from 'flag';

const reducer = createFlagsReducer({
  feature: {
    cardOrderFlow: false,
  },
});

export default reducer;
