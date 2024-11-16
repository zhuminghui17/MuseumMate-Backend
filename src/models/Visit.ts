export interface VisitArgument {
    visitId: string;
    userId: string;
    museumId: string;
    visitDate: Date;
    reviewIds: string[];
    numberOfVisits: number;
    createdAt: Date;
    lastUpdated: Date;
}

export default class Visit {
    id: string;
    userId: string;
    museumId: string;
    visitDate: Date;
    reviewIds: string[];
    numberOfVisits: number;
    createdAt: Date;
    lastUpdated: Date;

    constructor(args: VisitArgument) {
        this.id = args.visitId;
        this.userId = args.userId;
        this.museumId = args.museumId;
        this.visitDate = args.visitDate;
        this.reviewIds = args.reviewIds;
        this.numberOfVisits = args.numberOfVisits;
        this.createdAt = args.createdAt;
        this.lastUpdated = args.lastUpdated;
    }

    static create() {
        return new Visit({
            visitId: '',
            userId: '',
            museumId: '',
            visitDate: new Date(),
            reviewIds: [],
            numberOfVisits: 0,
            createdAt: new Date(),
            lastUpdated: new Date(),
        })
    }
}


