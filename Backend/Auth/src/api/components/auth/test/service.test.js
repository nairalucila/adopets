jest.mock('validator');
jest.mock('../../users/model');
jest.mock('bcrypt');

const rewire = require('rewire');
const Service = rewire('../service.js');

const mockUser = {
  firstName: 'test',
  lastName: 'test',
  email: 'test@gmail.com',
  password: 'test',
  phone: 'test',
};

describe('Auth service test', () => {
  describe('instanceUser', () => {
    beforeEach(() => {
      Service.__set__(
          'User.build',
          jest.fn().mockImplementation(() => mockUser),
      );
    });
    it('Should throw an error if emails is not valid', () => {
      Service.__set__(
          'validateUser',
          jest.fn().mockImplementation(() => {
            throw new Error('Invalid email');
          }),
      );
      expect(() => Service.instanceUser(mockUser)).toThrowError(
          'Invalid email',
      );
      expect(Service.__get__('validateUser')).toHaveBeenCalled();
    });

    it('Should return user instance when the format is valid', () => {
      Service.__set__(
          'validateUser',
          jest.fn().mockImplementation(() => {
            return true;
          }),
      );
      expect(Service.instanceUser(mockUser)).toEqual(mockUser);
    });
  });

  describe('encryptPassword', () => {
    it('Must encrypt the password', async () => {
      Service.__set__('bcrypt.hash', jest.fn().mockResolvedValue('encrypt'));
      await Service.encryptPassword(mockUser);
      expect(mockUser).toHaveProperty('password', 'encrypt');
    });
    it('if error throw an error', () => {
      Service.__set__(
          'bcrypt.hash',
          jest.fn().mockRejectedValue(new Error('')),
      );
      expect(Service.encryptPassword(mockUser)).rejects.toThrowError(
          'bcrypt.hash error',
      );
    });
  });
});
