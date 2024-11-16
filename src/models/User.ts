export interface UserArgument {
    userId: string;
    username: string;
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    visitIds: string[];
    reviewIds: string[];
}

export default class User {
    userId: string;
    username: string;
    email: string;
    phone: string;
    firstName: string;
    lastName: string;
    visitIds: string[];
    reviewIds: string[];

    constructor(args: UserArgument) {
        this.userId = args.userId;
        this.username = args.username;
        this.email = args.email;
        this.phone = args.phone;
        this.firstName = args.firstName;
        this.lastName = args.lastName;
        this.visitIds = args.visitIds;
        this.reviewIds = args.reviewIds;
    }

    static create() {
        return new User({
            userId: '',
            username: '',
            email: '',
            phone: '',
            firstName: '',
            lastName: '',
            visitIds: [],
            reviewIds: [],
        })
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`
    }
}
