const ReactGA = require('react-ga')
ReactGA.initialize(' TODO ')

exports.onRouteUpdate = ({ location }) => {
    ReactGA.pageview(location.pathname)
}
