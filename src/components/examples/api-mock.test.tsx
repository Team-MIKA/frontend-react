import axios from "axios";
import nock from "nock";

class User {
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }

    public username: string;
    public password: string;
    login: () => boolean = () => this.username == "888aaen";
    equal: (otherUser: User) => boolean = (otherUser) =>
        this.username == otherUser.username && this.password == otherUser.password;
}

const getUsers: () => Promise<User[]> = async () => {
    return new Promise<User[]>((resolve) => {
        axios.get<User[]>("https://test-server.com/get-users").then((users) => {
            const user_objects = users.data.map((userJson) => new User(userJson.username, userJson.password));
            resolve(user_objects);
        });
    });
};

describe("Mock users from url", () => {
    const mockUsers = [new User("888aaen", "password")];

    beforeAll(() => {
        // This forces axios to not use https.
        axios.defaults.adapter = require("axios/lib/adapters/http"); //Flyt til test utils
    });

    beforeEach(() => {
        nock("https://test-server.com").get("/get-users").reply(200, mockUsers);
    });

    it("should return an array of users", async () => {
        const users = await getUsers();

        users.every((user, index) => expect(user.equal(mockUsers[index])).toBeTruthy());
    });
});
