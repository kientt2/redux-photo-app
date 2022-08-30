import { createSlice } from "@reduxjs/toolkit";

const initialState = JSON.parse(localStorage.getItem("myphoto")) || [
  {
    title: "kientt",
    categoryId: 2,
    photo: "https://picsum.photos/id/1019/300/300",
  },
];

const photoSlice = createSlice({
  name: "photoList",
  initialState: initialState,
  reducers: {
    addPhoto: (state, action) => {
      const newPhoto = action.payload;
      state.push(newPhoto);
      localStorage.setItem("myphoto", JSON.stringify(state));
    },
    removePhoto: (state, action) => {
      const target = action.payload;
      state = state.filter(photo => photo.photo !== target.photo);
      localStorage.setItem("myphoto", JSON.stringify(state));
      return state;
    },
  },
});

console.log ('slice',photoSlice);

const { reducer, actions }  = photoSlice;
export const { addPhoto, removePhoto } = actions;
export default photoSlice;
