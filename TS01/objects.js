"use strict";
// const user = {
Object.defineProperty(exports, "__esModule", { value: true });
// }
function createUser(_a) {
    var string = _a.name, boolean = _a.isPremium;
}
createUser({ name: "Thor", isPremium: true });
function createCourse(_a) {
    var string = _a.name, boolean = _a.isPremium;
    return { name: "Captain America", isPremium: false };
}
var newUser = {
    name: "Captain America",
    isPremium: true,
    email: "ok@mail.com",
};
createCourse(newUser);
function login(us) {
    return us;
}
function newGuest(user) {
    console.log(user);
    return user;
}
newGuest({ email: "v@v.com", username: "hero", password: "hero123", isPremium: true });
