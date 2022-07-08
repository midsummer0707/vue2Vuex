export default {
    //mutations是数据改变的唯一通道，同步方式！！！
    //type:事件类型，可以理解为方法名
    //state:数据状态的定义
    //payload:载荷，本质上就是一个json对象,用于传递数据的容器
    setType(state, payload) {
        state.name = payload.hahaname
    },

    setBirthDay(state, payload) {
        state.myBirthDaty = payload.birthday
    },

    setMyCountry(state, payload) {
        state.myAddress = payload.newAddress
    },

    setMyStaticCountry(state, payload) {
        state.myAddress = payload.newAddress
    },

    setMyStaticGender(state, payload) {
        state.myGender = payload.newGender
    },

    methodGender(state, payload) {
        state.surname = payload.newSurname
    },

    handleFirstBook(state, val) {
        state.firstBook = "这是一本教育意义的书籍:" + val
    },
    handleSecondBook(state, val) {
        state.secondBook = val + "你知道其他的生肖吗? 比如:鼠,牛,虎..."
    },

    setMyGames(state, payload) {
        state.game = payload.newSetName
    },


    setSecondGame(state, payload) {
        state.content = payload.changeContent
    }



}
