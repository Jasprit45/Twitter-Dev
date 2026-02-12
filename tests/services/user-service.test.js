import UserService from "../../src/services/user-service.js";
import UserRepository from "../../src/repository/user-repository.js";

jest.mock("../../src/repository/user-repository.js");

describe('user service signup tests',()=> {
    test('should successfully create a user', async ()=> {
        const data = {
            email:'a@b.com',
            password:'123456'
        };
        (UserRepository.prototype.create).mockReturnValue({...data ,
             createdAt: '2026-02-12',
             updatedAt: '2026-02-12'
            });
        const service = new UserService();
        const response = await service.signup();
        expect(response.email).toBe(data.email);
    });
});
