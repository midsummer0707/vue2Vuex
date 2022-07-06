export default {
    getNickname: (state) => {
        return state.name
    },

    getMyBirthDay(state) {
        return state.myBirthDaty
    },

    getMyAddress(state) {
        return state.myAddress
    },
    getMyGender(state) {
        return state.myGender
    },

    getMySurname(state) {
        return state.surname
    }
}