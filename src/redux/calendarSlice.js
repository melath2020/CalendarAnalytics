import { createSlice } from "@reduxjs/toolkit";
import dummyData from "../data/dummyData.json";

const calendarSlice = createSlice({
  name: "calendar",
  initialState: {
    selectedDate: null,
    selectedData: null,
    data: dummyData
  },
  reducers: {
    setSelectedDate(state, action) {
      const { date } = action.payload;
      state.selectedDate = date;
      state.selectedData = state.data[date] || null;
    }
  }
});

export const { setSelectedDate } = calendarSlice.actions;
export default calendarSlice.reducer;
