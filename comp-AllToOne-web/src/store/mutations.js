const mutations = {
  selectCity(state, cityInfo) {
    state.cityName = cityInfo.cityName;
    state.cityId = cityInfo.cityId;
    localStorage.setItem('cityInfo', JSON.stringify(cityInfo));
  },
  selectField(state, field) {
    state.field = field;
  },
};

export default mutations;
