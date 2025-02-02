import React from "react"
import Layout from "../components/layout"
import Main from "../components/main"
import Seo from "../meta/seo"
import Rss from "../meta/rss"
import useSiteMetadata from "../hooks/use-site-metadata"
import toFormattedJst from "../util/jst"
import "./investment_environment_score.module.css"


const InvestmentEnvironmentScore = ({ pageContext }) => {
  const { score } = pageContext;
  const date = new Date()

  return (
    <Layout>
      <Main>
        <h1>今日の投資環境スコア: {score}</h1>
        <h2>更新日: {toFormattedJst(date)}</h2>
        <section>
          <h3>投資環境スコアとは</h3>
          <p>投資環境スコアとは、堀井正孝さんによる<a href="https://amzn.to/3WHpTbg">改訂版 金利を見れば投資はうまくいく</a>で紹介されている指標です。</p>
          <p>投資環境スコアは10から-10までの数値で表され、数値が-6を下回ると景気減速が近く、株式投資から債券投資へと移行するべきというサインです。</p>
          <p>逆にスコアが上昇傾向にある場合は景気回復局面にあるため、株式投資の収益が得やすい環境であることを示唆します。</p>
        </section>
        <section>
          <h3>投資環境スコアの計算方法</h3>
          <p>投資環境スコアは、以下の指標により計算されます。セントルイス連邦準備銀行から参照できます。</p>
          <ul>
            <li>アメリカ政策金利（FEDFUNDS）</li>
            <li>アメリカ10年国債利回り（US10Y）</li>
            <li>アメリカ社債スプレッド（BAA10Y）</li>
            <li>米ドル指数（DTWEXBGS）</li>
          </ul>
          <p>これらの指標は、世界経済の中心にあるアメリカの金融政策サイクルや信用サイクルに反応するため、世界経済の動向を知り、総合的な投資判断ができるようになります。</p>
        </section>
        <section>
          <h3>投資環境スコアの推移</h3>
          <p>参考までに2024年8月からの投資環境スコアの推移も載せておきます。</p>
          <table>
            <tr>
              <th>日付</th>
              <th>投資環境スコア</th>
            </tr>
            <tr>
              <td>2024-08-01</td>
              <td>2</td>
            </tr>
            <tr>
              <td>2024-09-02</td>
              <td>-2</td>
            </tr>
            <tr>
              <td>2024-10-01</td>
              <td>2</td>
            </tr>
            <tr>
              <td>2024-11-01</td>
              <td>-2</td>
            </tr>
            <tr>
              <td>2024-12-02</td>
              <td>2</td>
            </tr>
            <tr>
              <td>2025-01-01</td>
              <td>4</td>
            </tr>
          </table>
          <section>
            <h3>現在の投資環境</h3>
            <p>現在のアメリカはインフレが沈静化しつつありますが、未だ経済は力強く、インフレ再燃のリスクが常に意識されています。</p>
            <p>実際に2025年1月のFOMCでは政策金利が4.5%の据え置きで決まりました。金融政策サイクルが利下げ局面から据え置き局面に移行しつつあるのかもしれません。</p>
            <p>金融政策サイクル以外にも、トランプ大統領就任によるアメリカ国内情勢の変化、前例のないほどの株高、非常に激しいAI開発競争、中東やウクライナの情勢などのリスクがあり、今後のアメリカ経済の見通しは立ちません。</p>
            <p>日本ではアメリカの金融政策を追うようにしてようやく金利が動き始め、日銀が利上げをし始めています。</p>
            <p>これらを総合的に判断すると、投資家としては積極的に投資をする局面ではなく、投資をする場合は慎重に、しない場合は情勢を静観するべきなのでしょう。</p>
          </section>
        </section>
      </Main>
    </Layout>
  )
}

export const Head = () => {
  const { title, siteUrl, description, twitterAccount } = useSiteMetadata()

  return (
    <>
      <Rss />
      <Seo
        meta={{
          title: title,
          description: description,
          siteUrl: siteUrl,
          twitterAccount: twitterAccount,
        }}
      />
    </>
  )
}


export default InvestmentEnvironmentScore