export default (props) => {
  var dataLayer = window.dataLayer || [];
  dataLayer.push({
    event: "customEvent",
    ...props
  })

}