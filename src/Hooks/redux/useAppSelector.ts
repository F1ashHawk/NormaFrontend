import {useSelector, TypedUseSelectorHook} from 'react-redux';
import type {RootState} from '../../Store/store';

export const useAppSelector :TypedUseSelectorHook<RootState> = useSelector;