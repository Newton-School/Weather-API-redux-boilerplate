import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  city: 'mumbai',
  today_weather: {
    clouds: 20,
    dew_point: 25.82,
    dt: 1620045404,
    feels_like: 38.85,
    humidity: 74,
    pressure: 1005,
    sunrise: 1620002374,
    sunset: 1620048678,
    temp: 31,
    uvi: 0.18,
    visibility: 4000,
  },
  loading: false,
  error: null
};

export const weatherSearch = createAsyncThunk(
  'weather/weatherSearch',
  async (city, { rejectWithValue }) => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        if (city === 'mumbai') {
          resolve({
            clouds: 20,
            dew_point: 25.82,
            dt: 1620045404,
            feels_like: 38.85,
            humidity: 74,
            pressure: 1005,
            sunrise: 1620002374,
            sunset: 1620048678,
            temp: 31,
            uvi: 0.18,
            visibility: 4000,
          });
        }
        if (city === 'chennai') {
          resolve({
            clouds: 40,
            dew_point: 23.59,
            dt: 1620045480,
            feels_like: 35.64,
            humidity: 66,
            pressure: 1005,
            sunrise: 1620001032,
            sunset: 1620046453,
            temp: 30.67,
            uvi: 0,
            visibility: 6000
          });
        }
        if (city === 'delhi') {
          resolve({
            clouds: 34,
            dew_point: 6.3,
            dt: 1620045528,
            feels_like: 33.75,
            humidity: 16,
            pressure: 1003,
            sunrise: 1620000520,
            sunset: 1620048434,
            temp: 36.06,
            uvi: 0.09,
            visibility: 4000
          });
        }
        if (city === 'kolkata') {
          resolve({
            clouds: 20,
            dew_point: 22.7,
            dt: 1620045604,
            feels_like: 36.48,
            humidity: 58,
            pressure: 1004,
            sunrise: 1619998368,
            sunset: 1620045233
            , temp: 32
            , uvi: 0
            , visibility: 3500

          });
        }
        else {
          reject(new Error("city " + city + " not in database"))
        }
      }, 1000);
    })
    return response
  }
)

export const counterSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setCity: (state, action) => {
      state.city = action.payload
    },
  },
  extraReducers: {
    [weatherSearch.pending]: (state, action) => {
      if (!state.loading) state.loading = true;
      if (state.error != null) state.error = null;
      if (state.today_weather) state.today_weather = null;
    },
    [weatherSearch.fulfilled]: (state, action) => {
      state.today_weather = action.payload
      state.loading = false

    },
    [weatherSearch.rejected]: (state, action) => {
      state.loading = false
      state.error = action.error.message
    }
  }

});

export const { setCity } = counterSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectCity = (state) => state.weather.city;
export const selectError = (state) => state.weather.error;
export const selectLoading = (state) => state.weather.loading;
export const selectTodayWeather = (state) => state.weather.today_weather;

export default counterSlice.reducer;
