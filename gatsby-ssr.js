const React = require("react")

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "ja" })
  // setHeadComponents([
  //   <script 
  //     async 
  //     src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8654869064923371"
  //     crossOrigin="anonymous">
  //   </script>
  // ])
}