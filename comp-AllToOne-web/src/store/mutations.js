const mutations = {
  selectCity(state, cityInfo) {
    state.cityInfo.cityName = cityInfo.cityName;
    state.cityInfo.cityId = cityInfo.cityId;
    localStorage.setItem('cityInfo', JSON.stringify(cityInfo));
  },
  selectField(state, field) {
    state.field = field;
  },
};

export default mutations;
