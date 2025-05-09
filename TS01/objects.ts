// const user = {

// }

function createUser({ name: string, isPremium: boolean }) {}

createUser({ name: "Thor", isPremium: true });

function createCourse({ name: string, isPremium: boolean }): {
  name: string;
  isPremium: boolean;
} {
  return { name: "Captain America", isPremium: false };
}

let newUser = {
  name: "Captain America",
  isPremium: true,
  email: "ok@mail.com",
};

createCourse(newUser);

type User = {
  username: string;
  email: string;
  password: number;
};

function login(us: User): User {
    return us
}

type userDetails = {
    readonly _id: string;
    username: string;
    email: string;
    password: string;
    isPremium: boolean;
    creditCard?: number;
}

type combineType = User & userDetails & {
    cvv: number
}


function newGuest(user: userDetails): userDetails {
    console.log(user);
    return user;
}

newGuest({_id: "123", email: "v@v.com", username: "hero", password: "hero123", isPremium: true})

export {};
