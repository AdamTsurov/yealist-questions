export interface Skill {
    id: number
    title: string
    description: string
    imageSrc: string
    createdAt: string
    updatedAt: string
}

export interface SkillsApiResponse {
    data: Skill[]
    limit: number
    page: number
    total: number
}

export interface SkillParams {
    page?: number
    limit?: number
}
