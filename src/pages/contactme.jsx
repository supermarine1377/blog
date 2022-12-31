import React, {useState} from "react";
import Layout from "../components/layout"
import Main from "../components/main"
import * as style from "./contactme.module.css"

const Contact = () => {
  const [isAgreed, setIsAgreed] = useState(false)

  const agreeWithPrivacyPolicy = () => {
    setIsAgreed(!isAgreed)
    console.log(isAgreed)
  }

  const onSubmit = () => {
    console.log("hoge")
  }

  return (
    <Layout>
      <Main>
        <div className={style.wrapper}>
          <h1 className={style.title}>お問合せ</h1>
          <p>お問合せの際に頂いた情報は、<a href="/privacy_policy" target={"_blank"} rel={"noopener noreferrer"}>プライバシーポリシー</a>に従い、厳重に管理いたします。</p>
          <form name="contact" method="POST" data-netlify="true" className={style.form} onSubmit={onSubmit}>
            <div>
              <label htmlFor="name">お名前, またはハンドルネーム（必須）
                <input name="name" type="text" required />
              </label>
            </div>
            <div>
              <label htmlFor="email">メールアドレス（必須）
                <input name="email" type="email" required />
              </label>
            </div>
            <div>
              <label htmlFor="content">お問い合わせ内容
                <textarea
                  name="content"
                  rows="10"
                  required
                ></textarea>
              </label>
            </div>
            <div className={style.check}>
              <label htmlFor="privacy_policy">
                プライバシーポリシーに同意する
                <input type="checkbox" value={isAgreed} onChange={agreeWithPrivacyPolicy} required />
              </label>
            </div>
            <div className={style.control}>
              <button type="submit" disabled={!isAgreed}>送信する</button>
            </div>
          </form>
        </div>
      </Main>
    </Layout>
  )
}

export default Contact