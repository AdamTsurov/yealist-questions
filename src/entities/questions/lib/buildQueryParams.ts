import type { TypeBuildParams, IQueryParams } from '../model/types'

export const buildQueryParams: TypeBuildParams = (params) => {
    const { specializations, skills, rate, complexity, keywords, title, page, limit } = params

    const queryParams: IQueryParams = {}

    if (page !== undefined) queryParams.page = page
    if (limit !== undefined) queryParams.limit = limit

    if (specializations && specializations.length > 0) {
        queryParams.specialization = specializations.join(',')
    }

    if (skills && skills.length > 0) {
        queryParams.skills = skills.join(',')
    }

    if (rate && rate.length > 0) {
        queryParams.rate = rate.join(',')
    }

    if (complexity && complexity.length > 0) {
        queryParams.complexity = complexity.join(',')
    }

    if (title && title.trim() !== '') {
        queryParams.title = title.trim()
    }

    if (keywords && keywords.trim() !== '') {
        queryParams.keywords = keywords
    }

    return queryParams
}
