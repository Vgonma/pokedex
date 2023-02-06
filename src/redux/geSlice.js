import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Actions
const GET_DATA = 'runescape-price-viewer/';

// Aditional Action Creators
const getData = createAsyncThunk(GET_DATA, async (category = 1, letter = 'a') => {
  fetch(`https://secure.runescape.com/m=itemdb_oldschool/api/catalogue/items.json?category=${category}&alpha=${letter}&page=1`)
    .then((response) => response.json())
    .then((data) => (
      data.items.map((item) => (
        {
          name: item.name,
          id: item.id,
          icon: item.icon_large,
          members: item.members,
        }
      ))
    ));
});

const initialState = {
  loading: false,
  items: [],
};

const geSlice = createSlice({
  name: 'geReducer',
  initialState,
  reducers: {

  },
  extraReducers: {
    [getData.fulfilled]: (state, action) => ([...state, []]),
  },

});

export default geSlice;
