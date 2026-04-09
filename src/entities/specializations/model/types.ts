export interface Specialization {
    id: number
    title: string
    description: string
    imageSrc: string
    createdAt: string
    updatedAt: string
    createdBy: {
        id: string
        username: string
    }
}

export interface SpecializationParams {
    page?: number
    limit?: number
}

export interface SpecializationApiResponse {
    data: Specialization[]
    limit: number
    page: number
    total: number
}

export interface Specialization {
    id: number
    title: string
}