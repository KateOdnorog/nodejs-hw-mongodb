import createHttpError from 'http-errors';

export const notFoundContact = createHttpError(404, 'Contact not found');
