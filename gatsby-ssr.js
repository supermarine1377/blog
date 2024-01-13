const React = require("react");

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: "ja" });
  setHeadComponents([
    <>
      <script 
        async 
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8654869064923371"
        crossOrigin="anonymous">
      </script>
      <ins 
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-8654869064923371"
        data-ad-slot="1563441994"
        data-ad-format="auto"
        data-full-width-responsive="true"
      >
      </ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
    </>,
  ]);
};
