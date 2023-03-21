let cityInfo = {
  cityId: 0,
  cityName: '全部',
};

try {
  if (localStorage.cityInfo) {
    cityInfo = JSON.parse(localStorage.cityInfo);
  }
} catch (err) {}

const state = () => ({
  field: 'all',
  DataPool: {},
  cityInfo,
  isLoading: false,
});

export default state;
