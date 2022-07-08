export default {
    setStaticCountry(context, payload) {
        context.commit('setMyStaticCountry', payload)
    },

    setStaticGender(context, payload) {
        context.commit("setMyStaticGender", payload)
    },
    setActionSurname(context, payload) {
        setTimeout(() => {
            context.commit("methodGender", payload);
        }, 5000)
    },

    setBookAction(context, val) {
        context.commit('handleSecondBook', val)
    }

    ,
    setStoryAction(context, payload) {
        context.commit("setSecondGame", payload)

    }
}