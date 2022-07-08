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
    },

    getBoosAll(state) {
        return state.firstBook + ":祝您生日快乐,在新的" + state.secondBook + "2022, 一切好运"
    },

    getGamesName(state) {
        return state.game
    },
    getContent(state) {
        return state.content
    }
}