import { ToastContainer } from 'react-toastify'
import Head from 'next/head'
import Link from 'next/link'

export default function Layout({ children }) {
  const title = 'My質問回答サービス'
  const description = '質問と回答を行えるサービスです。'
  const ogpImageUrl = `${process.env.NEXT_PUBLIC_WEB_URL}/images/card.png`

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta property="og:image" key="ogImage" content={ogpImageUrl} />
        <meta name="twitter:card" key="twitterCard" content="summary" />
        <meta name="twitter:image" key="twitterImage" content={ogpImageUrl} />
        <meta name="description" key="description" content={description} />
        <meta property="og:title" key="ogTItle" content={title} />
        <meta property="og:site_name" key="ogSiteName" content={title} />
        <meta
          property="og:description"
          key="ogDescription"
          content={description}
        />
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </Head>
      <nav
        className="navbar navbar-expand-lg navbar-light mb-3"
        style={{ backgroundColor: '#e3f2fd' }}
      >
        <div className="container">
          <div className="mr-auto">
            <a className="navbar-brand" href="/">
              My質問サービス
            </a>
          </div>
        </div>
      </nav>
      <div className="container">{children}</div>
      <ToastContainer />
      <footer className="text-center mt-5 py-5 bg-light">
        <div className="pb-1 text-muted">
          Created by{' '}
          <a href="https://twitter.com/dala00" className="link-info">
            @dala00
          </a>
        </div>
        <div>
          <Link href="/terms-of-service">
            <a className="d-inline-block mx-1">利用規約</a>
          </Link>
          <Link href="/privacy-policy">
            <a className="d-inline-block mx-1">プライバシーポリシー</a>
          </Link>
        </div>
      </footer>
      <nav className="navbar fixed-bottom navbar-light bg-light">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center w-100">
            <i className="material-icons">menu</i>
            <Link href="/questions/received">
              <i className="material-icons">home</i>
            </Link>
            <Link href="/users/me">
              <i className="material-icons">person</i>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  )
}