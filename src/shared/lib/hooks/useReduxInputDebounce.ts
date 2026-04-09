import { useEffect, useState, type ChangeEvent } from 'react'
import { useDebounce } from './useDebounce'
import { useDispatch } from 'react-redux'
import type { ActionCreatorWithPayload } from '@reduxjs/toolkit';

interface UseReduxInputDebounceProps {
  reduxValue: string;
  setReduxValue:  ActionCreatorWithPayload<string>
  delay?: number;
}

export const useReduxInputDebounce = ({ reduxValue, setReduxValue, delay = 500 }: UseReduxInputDebounceProps) => {
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
