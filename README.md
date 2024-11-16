# MuseumMate-Backend

## Think about Design

- Museum Class
    - id: string
    - name: string
    - description: string
    - hours: {string: string}
    - tickets: {string: string}
    - location: string
    - website: string
    - phone: string
    - email: string
    - image: string
    - exhibitions: [Exhibition]
    
- Exhibition Class
    - id: string
    - name: string
    - description: string
    - museumId: string
    - featuredImage: string
    - images: [string]

- User Class
    - id: string
    - email: string
    - password: string
    - name: string
    - image: string

- Review Class
    - id: string
    - userId: string
    - museumId: string
    - rating: number
    - tags: [string]
    - willingToRevisit: boolean
    - comment: string
    - createdAt: string // timestamp
    - lastUpdated: string // timestamp

- Visit Class
    - id: string
    - userId: string
    - museumId: string
    - visitDate: string
    - reviews: [Review]
    - numberOfVisits: number
    - createdAt: string // timestamp
    - lastUpdated: string // timestamp




