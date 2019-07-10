import { MALLET_OPTIONS } from "./constants/mallet-options";

export const getMalletSizes = ({ type, material }) =>
  type && material ? MALLET_OPTIONS[type][material] : {};
export const getMalletModels = ({ type }) =>
  (type && MALLET_OPTIONS[type]) || {};
  