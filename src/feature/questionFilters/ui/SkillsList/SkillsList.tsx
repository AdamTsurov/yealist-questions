import { useDispatch } from 'react-redux'
import { toggleSelectSkill } from '../../model/questionsFiltersSlice'
import { useFetchSkillsQuery } from '@/entities/skills/api/skillsApi'
import { useAppSelector } from '@/shared/lib/hooks/redux'
import { selectSkill } from '../../model/questionsFiltersSelectors'
import SkillsDisplay from '@/shared/ui/SkillsDisplay/SkillsDisplay'
import Spinner from '@/shared/ui/Spinner/Spinner'
import ErrorMessage from '@/shared/ui/ErrorMessage/ErrorMessage'
import EmptyState from '@/shared/ui/EmptyState/EmptyState'

const SkillsList = () => {
  const { data: skillsResponse, error, isLoading, refetch } = useFetchSkillsQuery({ limit: 10 })
  const isValidData = !skillsResponse || skillsResponse.data.length === 0
  const selectSkills = useAppSelector(selectSkill)
  const dispatch = useDispatch()

  if (isLoading) return <Spinner />
  if (error) return <ErrorMessage onRetry={refetch} />
  if (isValidData) return <EmptyState />

  const handleToggle = (id: number) => {
    dispatch(toggleSelectSkill(id))
  }

  return (
    <SkillsDisplay
      skills={skillsResponse.data}
      selectedIds={selectSkills}
      onToggle={handleToggle}
    />
  )
}

export default SkillsList
