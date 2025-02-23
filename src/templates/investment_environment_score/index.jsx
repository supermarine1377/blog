import React from "react"
import Layout from "../../components/layout"
import Main from "../../components/main"
import toFormattedJst from "../../util/jst"
import "./style.css"


const InvestmentEnvironmentScore = ({ pageContext }) => {
  const { score } = pageContext;
  const date = new Date()

  return (
    <Layout>
      <Main>
        <h1>今日の投資環境スコア: {score}</h1>
        <span>更新日: {toFormattedJst(date)}</span>
        <section>
          <h2>投資環境スコアとは？ - 投資判断の羅針盤</h2>
          <p>投資環境スコアとは、堀井正孝さんによる<a href="https://amzn.to/3WHpTbg">改訂版 金利を見れば投資はうまくいく</a>で紹介されている、投資判断をサポートする指標です。</p>
          <p>投資環境スコアは10から-10までの数値で表され、-6を下回ると景気減速の兆候、株式投資から債券投資への移行を検討するサインとなります。</p>
          <p>逆にスコアが上昇傾向にある場合は景気回復局面を示唆し、株式投資で収益を上げやすい環境と考えられます。</p>        </section>
        <section>
          <h2>投資環境スコアの計算方法 - 4つの重要指標</h2>
          <p>投資環境スコアは、以下の4つのアメリカ経済指標に基づいて計算されます。各指標はセントルイス連邦準備銀行のデータベースから取得できます。</p>
          <ul>
            <li>アメリカ政策金利（FEDFUNDS）</li>
            <li>アメリカ10年国債利回り（US10Y）</li>
            <li>アメリカ社債スプレッド（BAA10Y）</li>
            <li>米ドル指数（DTWEXBGS）</li>
          </ul>
          <p>これらの指標は、世界経済を牽引するアメリカの金融政策や信用サイクルを反映するため、世界経済の動向を把握し、より的確な投資判断に役立ちます。</p>
          
        </section>
        <section>
          <h2>投資環境スコアの推移 (2024年8月以降) - 過去のデータ分析</h2>
          <p>2024年8月以降の投資環境スコアの推移を以下に示します。過去のスコア変動を分析することで、今後の投資戦略を立てる参考にしてください。</p>
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
            <h2>現在の投資環境</h2>
            <p>現在の投資スコアは4なので、株式投資と債券投資どちらが優位とも言えない状態です。</p>
            <p>現在のアメリカはインフレが沈静化しつつありますが、未だ経済は力強く、インフレ再燃のリスクが常に意識されています。</p>
            <p>実際に2025年1月のFOMCでは政策金利が4.5%の据え置きで決まりました。金融政策サイクルが利下げ局面から高金利を維持する据え置き局面に移行しつつあるのかもしれません。</p>
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
  const { title, siteUrl, twitterAccount } = useSiteMetadata()
  const pageTitle = "今日の投資環境スコア | 最新の指標と今後の投資戦略"

  return (
    <>
      <Rss />
      <Seo
        meta={{
          title: pageTitle.concat(" | ", title),
          description: "今日の投資環境スコアを公開。金利、国債利回り、社債スプレッド、米ドル指数から算出。株式投資、債券投資の判断に役立つ情報をお届けします。",
          siteUrl: siteUrl,
          twitterAccount: twitterAccount,
        }}
      />
    </>
  )
}


export default InvestmentEnvironmentScore