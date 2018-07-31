// room用store

export const state = () => ({
  usersWithoutCurrentAndTargetUser: [
    {
      id: 5,
      icon_path: "../icons/wakabayashi.jpg",
      last_name: "山田",
      first_name: "太郎",
      sex: 1
    },
    {
      id: 6,
      icon_path: "../icons/wakabayashi.jpg",
      last_name: "里中",
      first_name: "悟",
      sex: 1
    },
    {
      id: 7,
      icon_path: "../icons/wakabayashi.jpg",
      last_name: "殿馬",
      first_name: "一人",
      sex: 1
    }
  ]
});

export const actions = {};

export const getters = {
  filterUsers: state => filterWord => {
    if (!filterWord) return state.usersWithoutCurrentAndTargetUser;
    return state.usersWithoutCurrentAndTargetUser.filter(user =>
      (user.last_name + user.first_name).includes(filterWord)
    );
  }
};

export const mutations = {};
