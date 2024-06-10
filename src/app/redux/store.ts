import {configureStore} from '@reduxjs/toolkit'
import {useDispatch, useSelector, useStore} from "react-redux";

export const makeStore = () => {
    return configureStore({
        reducer: {},
    })
}


export type AppStore = ReturnType<typeof makeStore>
type RootState = ReturnType<AppStore['getState']>
type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
export const useAppStore = useStore.withTypes<AppStore>()