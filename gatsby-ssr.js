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
        (adsbygoogle = window.adsbygoogle || []).push({ });
      </script>
      <ins 
        className="adsbygoogle"
        style={{ display:"block", textAlign:"center" }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-8654869064923371"
        data-ad-slot="5540978973"></ins>
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({ });
      </script>
    </>,
  ]);
};
