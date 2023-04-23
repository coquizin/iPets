export const formatToNumber = (value: string) => {
  if (!value) {
    return "";
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  return onlyNums;
};

export const formatToOnlyLetters = (value: string) => {
  if (!value) {
    return "";
  }

  const onlyLetters = value.replace(/[^A-zÀ-ú ]/g, "");
  return onlyLetters;
};

export const formatToDate = (value: string) => {
  if (!value) {
    return "";
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 2) {
    return onlyNums;
  }
  if (onlyNums.length <= 4) {
    return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2)}`;
  }
  return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}/${onlyNums.slice(
    4,
    8
  )}`;
};

export const formatToCpf = (value: string) => {
  if (!value) {
    return "";
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  if (onlyNums.length <= 6) {
    return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3)}`;
  }
  if (onlyNums.length <= 9) {
    return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}.${onlyNums.slice(
      6
    )}`;
  }
  return `${onlyNums.slice(0, 3)}.${onlyNums.slice(3, 6)}.${onlyNums.slice(
    6,
    9
  )}-${onlyNums.slice(9, 11)}`;
};

export const formatToCnpj = (value: string) => {
  if (!value) {
    return "";
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 2) {
    return onlyNums;
  }
  if (onlyNums.length <= 5) {
    return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2)}`;
  }
  if (onlyNums.length <= 8) {
    return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2, 5)}.${onlyNums.slice(
      5
    )}`;
  }
  if (onlyNums.length <= 12) {
    return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2, 5)}.${onlyNums.slice(
      5,
      8
    )}/${onlyNums.slice(8)}`;
  }
  return `${onlyNums.slice(0, 2)}.${onlyNums.slice(2, 5)}.${onlyNums.slice(
    5,
    8
  )}/${onlyNums.slice(8, 12)}-${onlyNums.slice(12, 14)}`;
};

export const formatToCEP = (value: string) => {
  if (!value) {
    return "";
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 5) {
    return onlyNums;
  }
  return `${onlyNums.slice(0, 5)}-${onlyNums.slice(5, 8)}`;
};

export const formatToCreditCard = (value: string) => {
  if (!value) {
    return "";
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 4) {
    return onlyNums;
  }
  if (onlyNums.length <= 8) {
    return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4)}`;
  }
  if (onlyNums.length <= 12) {
    return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4, 8)} ${onlyNums.slice(
      8
    )}`;
  }
  if (onlyNums.length <= 16) {
    return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4, 8)} ${onlyNums.slice(
      8,
      12
    )} ${onlyNums.slice(12, 16)}`;
  }
  return `${onlyNums.slice(0, 4)} ${onlyNums.slice(4, 8)} ${onlyNums.slice(
    8,
    12
  )} ${onlyNums.slice(12, 16)}`;
};

export const formatToCVV = (value: string) => {
  if (!value) {
    return "";
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 3) {
    return onlyNums;
  }
  return onlyNums.slice(0, 3);
};

export const formatToValidate = (value: string) => {
  if (!value) {
    return "";
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 2) {
    return onlyNums;
  }
  return `${onlyNums.slice(0, 2)}/${onlyNums.slice(2, 4)}`;
};

export const formatToAgency = (value: string) => {
  if (!value) {
    return "";
  }

  // mask for 0000
  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 4) {
    return onlyNums;
  }
  return onlyNums.slice(0, 4);
};

export const formatToDigit = (value: string) => {
  if (!value) {
    return "";
  }

  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 1) {
    return onlyNums;
  }
  return onlyNums.slice(0, 1);
};

export const formatToAccount = (value: string) => {
  if (!value) {
    return "";
  }

  // mask for 000000-0
  const onlyNums = value.replace(/[^\d]/g, "");
  if (onlyNums.length <= 6) {
    return onlyNums;
  }
  return `${onlyNums.slice(0, 6)}-${onlyNums.slice(6, 7)}`;
};
