import { createSlice } from "@reduxjs/toolkit";
import { CHAT_OFFSET_COUNT } from "../../utils/constant";

const chatMessageSlice = createSlice({
    name: "chatemesage",
    initialState: {
        messages: []
    },
    reducers: {
        addChatMessage: (state, action) => {
            state.messages.splice(CHAT_OFFSET_COUNT, 1)
            state.messages.push(action.payload);
        },
        removeChatMessage: (state) => {
            state.messages = [];
        }
    }
});

export const { addChatMessage, removeChatMessage } = chatMessageSlice.actions;
export default chatMessageSlice.reducer;