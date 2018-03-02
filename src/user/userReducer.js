// @flow
import type RoutineAction from 'redux-saga-routines';
import { type UserState, initialUserState } from './userState';
import { fetchRoutine, creationRoutine } from './userRoutines';
import {
  fetchRoutine as fetchProfileRoutine,
  creationRoutine as createOrUpdateProfileRoutine,
} from './profile/profileRoutines';
import {
  createOrUpdateAddressRoutine,
  fetchAddressRoutine,
} from '../card/order/address/addressRoutine';
import { createSecretRoutine as createMultiFactorAuth } from '../settings/multiFactorAuth/multiFactorAuthRoutines';

const userReducer = (
  state: UserState = initialUserState,
  action: RoutineAction,
): UserState => {
  switch (action.type) {
    case fetchRoutine.TRIGGER:
      return {
        ...state,
      };

    case fetchRoutine.SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case fetchRoutine.FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case creationRoutine.TRIGGER:
      return {
        ...state,
      };

    case creationRoutine.SUCCESS:
      return {
        ...state,
        ...action.payload,
      };

    case creationRoutine.FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    case fetchProfileRoutine.TRIGGER:
      return {
        ...state,
      };

    case fetchProfileRoutine.SUCCESS:
      return {
        ...state,
        profile: {
          ...action.payload,
          address: state.profile.address,
        },
      };

    case fetchProfileRoutine.FAILURE:
      return {
        ...state,
        profile: {
          ...state.profile,
          error: action.payload,
        },
      };

    case createOrUpdateProfileRoutine.SUCCESS:
      return {
        ...state,
        profile: {
          ...action.payload,
          address: state.profile.address,
        },
      };

    case fetchAddressRoutine.SUCCESS:
    case createOrUpdateAddressRoutine.SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          address: action.payload,
        },
      };

    case createOrUpdateAddressRoutine.FAILURE:
    case fetchAddressRoutine.FAILURE:
      return {
        ...state,
        profile: {
          ...state.profile,
          address: {
            ...state.profile.address,
            error: action.payload,
          },
        },
      };

    case createMultiFactorAuth.SUCCESS:
      return {
        ...state,
        isUsing2Fa: true,
      };

    default:
      return state;
  }
};

export default userReducer;
