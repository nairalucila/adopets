
const {registerController} = require('../controller');
const {
  encryptPassword,
  instanceUser,
} = require('../service');

jest.mock('../service');

const mockReq = {
  body: {
    firstName: 'test',
    lastName: 'test',
    email: 'test@gmail.com',
    password: 'test',
    phone: 'test',
  },
};

const mockRes = {
  sendStatus: function(status) {
    mockRes.status = status;
    return this;
  },
};

describe('Auth tests', () => {
  it('Should throw an error if is not a valid data', async () => {
    instanceUser.mockImplementation(() => {
      throw new Error();
    });
    mockRes.sendStatus = function(status) {
      mockRes.status = status;
      return this;
    };

    const result = await registerController(mockReq, mockRes);
    expect(result).toHaveProperty('status', 400);
    instanceUser.mockRestore();
  });

  it('should throw an error if bcrypt fails', async () => {
    encryptPassword.mockRejectedValue(new Error(''));
    const result = await registerController(mockReq, mockRes);
    expect(result).toHaveProperty('status', 500);
    encryptPassword.mockRestore();
  });
});
