const parseContactType = (type) => {
  const isString = typeof type === 'string';
  if (!isString) return;
  const isType = ['work', 'home', 'personal'].includes(type);

  if (isType) return type;
};

const parseBoolean = (value) => {
  if (typeof value !== 'string') return;
  if (value === 'true') return true;
  if (value === 'false') return false;
};

export const parseFilterParams = (query) => {
  const { contactType, isFavourite } = query;

  const parsedContactType = parseContactType(contactType);
  const parsedIsFavourite = parseBoolean(isFavourite);

  return {
    contactType: parsedContactType,
    isFavourite: parsedIsFavourite,
  };
};
