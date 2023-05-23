import { createSlice } from '@reduxjs/toolkit';
import ukFootballStadiums from '../../APIs/stadiumAPI';

const initialState = [...ukFootballStadiums];

const stadiumSlice = createSlice({
    name: 'stadiums',
    initialState,
    reducers: {
        setTemperatureData: (state, action) => {
            const { stadiumId, temperatureData } = action.payload;
            const stadium = state.find((stadium) => stadium.id === stadiumId);
            if (stadium) {
                stadium.setTemperatureData = temperatureData;
            }
        },
        setConditionData: (state, action) => {
            const { stadiumId, conditionData } = action.payload;
            const stadium = state.find((stadium) => stadium.id === stadiumId);
            if (stadium) {
                stadium.setConditionData = conditionData;
            }
        },
    },
});

export const { setTemperatureData, setConditionData } = stadiumSlice.actions;

export default stadiumSlice.reducer;