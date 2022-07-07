import { createSlice } from "@reduxjs/toolkit";

export const linksSlice = createSlice({
    name: "links",
    initialState: {

        linkCategory: "",
        linkHeader: "",
        linksList: []
    },
    reducers: {
        updateLink: (state, action) => {

            const { header } = action.payload;
            state.linkHeader = header;
            state.clickedLink = true;
        }

    },
});

export const { updateLink } = linksSlice.actions;
export const selectLinkCategory = (state) => state.links.linkCategory;
export const selectLinkHeader = (state) => state.links.linkHeader;


export default linksSlice.reducer;
