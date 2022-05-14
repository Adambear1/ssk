export default (event, props) => {
  var dataLayer = window.dataLayer || [];
  dataLayer.push({
    event,
    ...props
  })

}