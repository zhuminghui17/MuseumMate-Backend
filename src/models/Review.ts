export interface ReviewArgument {
    reviewId: string;
    userId: string;
    museumId: string;
    rating: number;
    tags: string[];
    willingToRevisit: boolean;
    comment: string;
    createdAt: Date;
    lastUpdated: Date;
}

export default class Review {
    reviewId: string;
    userId: string;
    museumId: string;
    rating: number;
    tags: string[];
    willingToRevisit: boolean;
    comment: string;
    createdAt: Date;
    lastUpdated: Date;

    constructor(args: ReviewArgument) {
        this.reviewId = args.reviewId;
        this.userId = args.userId;
        this.museumId = args.museumId;
        this.rating = args.rating;
        this.tags = args.tags;
        this.willingToRevisit = args.willingToRevisit;
        this.comment = args.comment;
        this.createdAt = args.createdAt;
        this.lastUpdated = args.lastUpdated;
    }

    static create() {
        return new Review({
            reviewId: '',
            userId: '',
            museumId: '',
            rating: 0,
            tags: [],
            willingToRevisit: false,
            comment: '',
            createdAt: new Date(),
            lastUpdated: new Date(),
        })
    }
}
