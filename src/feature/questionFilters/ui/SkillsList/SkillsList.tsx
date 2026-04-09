import { useDispatch } from 'react-redux'
import { toggleSelectSkill } from '../../model/questionsFiltersSlice'
import { useFetchSkillsQuery } from '@/entities/skills/api/skillsApi'
import { useAppSelector } from '@/shared/lib/hooks/redux'
import { selectSkill } from '../../model/questionsFiltersSelectors'
import SkillsDisplay from '@/shared/ui/SkillsDisplay/SkillsDisplay'

const SkillsList = () => {
  const { data: skillsResponse, error, isLoading, refetch } = useFetchSkillsQuery({ limit: 10 })
  const isValidData = !skillsResponse || skillsResponse.data.length === 0
  const selectSkills = useAppSelector(selectSkill)
  const dispatch = useDispatch()
  if (isValidData) return <>нет данных</>

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
