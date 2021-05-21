export const chooseWeatherImage = (weatherText) => {
  let weatherTextLowerCase = 'cloudy'

  if (weatherText) {
    weatherTextLowerCase = weatherText.toLowerCase()
  }

  switch (weatherTextLowerCase) {
    case 'sunny':
    case 'hot':
    case 'mostly sunny':
    case 'partly sunny':
    case 'intermittent clouds':
      return 'sunny-day'
    case 'hazy sunshine':
    case 'windy':
      return 'hazy-day'
    case 'light fog':
    case 'fog':
      return 'fog-day'
    case 'cloudy':
    case 'mostly cloudy':
    case 'overcast':
    case 'some clouds':
    case 'partly sunny w/ flurries':
      return 'cloudy-day'
    case 'dreary (overcast)':
    case 'mostly cloudy w/ flurries':
    case 'flurries':
      return 'dreary-day'
    case 'showers':
    case 'a shower':
    case 'cold':
    case 'ice':
    case 'sleet':
    case 'mostly cloudy w/ showers':
    case 'partly sunny w/ showers':
    case 'light rain':
      return 'cloudy-with-showers-day'
    case 'mostly cloudy w/ t-storms':
    case 'partly sunny w/ t-storms':
    case 't-storms':
    case 'mostly cloudy w/ snow':
    case 'snow':
    case 'thunderstorms':
    case 'rain and snow':
      return 'storm-day'
    case 'rain':
    case 'freezing rain':
      return 'rain-day'
    case 'clear':
    case 'mostly clear':
      return 'clear-sky-night'
    case 'partly cloudy':
    case 'partly cloudy w/ showers':
      return 'cloudy-night'
    case 'hazy moonlight':
      return 'hazy-night'
    case 'partly cloudy w/ t-storms':
      return 'rain-night'
    default:
      return 'sunny-day'
  }
}
