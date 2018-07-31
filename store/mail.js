// 匿メール用store

export const state = () => ({
  targetUser: {
    // NOTE: example
    // id: 4,
    // icon_path: "path_to_icon",
    // last_name: "村上",
    // first_name: "大和",
    // sex: 1
  },
  fromUsers: [],
  topics: [
    // firebaseの方でどういう風にデータを持つか検討しなければいけない。
    // 一旦仮置きしておく。
    { id: 1, content: "私と付き合えますか？", active: false },
    { id: 2, content: "私とどのくらい性格が合いますか？", active: false },
    { id: 3, content: "私をどのくらい尊敬できますか？", active: false }
  ],
  replyDeadlineDate: ""
})

export const actions = {
  setTargetUser({ commit }, user) {
    commit("setTargetUser", user)
  },
  setReplyDeadlineDate({ commit }, date) {
    commit("setReplyDeadlineDate", date)
  },
  toggleActivation({ commit }, toggleIndex) {
    commit("toggleActivation", toggleIndex)
  },
  deleteFromUser({ commit }, index) {
    commit("deleteFromUser", index)
  },
  setFromUser({ commit }, user) {
    commit("setFromUser", user)
  },
  createMail() {
    console.log("匿メール作成!")
  }
}

export const getters = {
  fromUserIds(state) {
    return state.fromUsers.map(user => user.id)
  }
}

export const mutations = {
  setTargetUser(state, user) {
    state.targetUser = user
  },
  setReplyDeadlineDate(state, date) {
    state.replyDeadlineDate = date
  },
  toggleActivation(state, toggleIndex) {
    state.topics[toggleIndex].active = !state.topics[toggleIndex].active
  },
  deleteFromUser(state, index) {
    state.fromUsers.splice(index, 1)
  },
  setFromUser(state, user) {
    state.fromUsers.push(user)
  }
}
