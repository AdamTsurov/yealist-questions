import { useEffect, useState, type ChangeEvent } from 'react'
import { useDebounce } from './useDebounce'
import { useDispatch } from 'react-redux'

export const useReduxInputDebounce = ({ reduxValue, setReduxValue, delay = 500 }) => {
  const [inputValue, setInputValue] = useState(reduxValue)
  const debouncedValue = useDebounce(inputValue, delay)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setReduxValue(debouncedValue))
  }, [dispatch, debouncedValue, setReduxValue])

  useEffect(() => {
    setInputValue(reduxValue || '')
  }, [reduxValue])

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value)
  }

  return {
    inputValue,
    handleChange,
  }
}
