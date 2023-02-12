interface Repository<T> {
    create: (obj: T) => T;
    get: () => T;
    delete: (obj: T) => T;
    update: (obj: T) => T;
}

class User {
    username: string;
    age: number;
}

class UserRepository implements Repository<User>{
    create: (obj: User) => User;
    get: () => User;
    delete: (obj: User) => User;
    update: (obj: User) => User;
}
