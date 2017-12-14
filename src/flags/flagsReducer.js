// @flow
import { createFlagsReducer } from 'flag';

const reducer = createFlagsReducer({
  feature: {
    cardOrderFlow: true,
  },
});

export default reducer;
