import axios from "axios";

export default {
    // Gets confirmed guests from the Attendees API
    getAttendees: function (params) {
        return axios.get("/api/attendees");
    },
    // Gets all guest book entries
    getGuestBookEntries: function () {
        return axios.get("/api/guestbook");
    },
    // Deletes the guest book entry with the given id
    deleteGuestBookEntry: function (id) {
        return axios.delete("/api/guestbook/" + id);
    }
};
