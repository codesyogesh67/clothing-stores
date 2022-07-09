import { createSlice } from "@reduxjs/toolkit";

export const extrasSlice = createSlice({
    name: "extras",
    initialState: {
        clickedLink: false,
        filterData: [],
        openModal: false,
        mobileView: false,
        openDrawer: false,
        linkCategory: "",
        linkHeader: "",
        message: ""
    },
    reducers: {

        updateFilterData: (state, action) => {
            state.filterData = action.payload;
        },
        updateOpenModal: (state, action) => {
            state.openModal = action.payload;
        },
        updateMobileView: (state, action) => {
            state.mobileView = action.payload;
        },
        updateOpenDrawer: (state, action) => {
            state.openDrawer = action.payload;
        },
        updateMessage: (state, action) => {
            state.message = action.payload
        }
    },
});

export const { updateOpenDrawer, updateMessage, updateMobileView, updateFilterData, updateOpenModal } = extrasSlice.actions;
// export const selectLinkSection = (state) => state.links.linkSection;
export const selectLinkCategory = (state) => state.extras.linkCategory;
export const selectLinkHeader = (state) => state.extras.linkHeader;
export const selectClickedLink = (state) => state.extras.clickedLink;
export const selectFilterData = (state) => state.extras.filterData;
export const selectOpenModal = (state) => state.extras.openModal;
export const selectMobileView = (state) => state.extras.mobileView;
export const selectOpenDrawer = (state) => state.extras.openDrawer;
export const selectMessage = (state) => state.extras.message;

export default extrasSlice.reducer;
