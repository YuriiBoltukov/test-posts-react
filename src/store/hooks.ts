import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'

/** A utility hook that returns the Redux `dispatch` function for the application */
export const useAppDispatch: () => AppDispatch = useDispatch

/** A utility hook that returns a typed selector hook for selecting values from the Redux store state */
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector