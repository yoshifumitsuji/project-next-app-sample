import Document, { Html, Head as NextHead, Main, NextScript } from 'next/document'

import {
  META_TITLE,
  META_DESCRIPTION,
  OG_URL,
  OG_TITLE,
  OG_DESCRIPTION,
  OG_IMAGE,
  FAV_DIR,
  GTM_ID,
  TW_DESCRIPTION,
  TW_IMAGE,
  TW_TITLE,
  TW_URL,
  META_THUMBNAIL,
} from 'src/config'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <NextHead>
          <title>{META_TITLE}</title>
          <meta name='description' content={META_DESCRIPTION} />
          <meta name='thumbnail' content={META_THUMBNAIL ?? OG_DESCRIPTION} />
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          {/* ogp */}
          <meta property='og:type' content='website' />
          <meta property='og:title' content={OG_TITLE ?? META_TITLE} />
          <meta property='og:description' content={OG_DESCRIPTION ?? META_DESCRIPTION} />
          <meta property='og:image' content={OG_IMAGE} />
          <meta property='og:url' content={OG_URL} />
          <meta property='og:site_name' content={META_TITLE} />
          {/* twitter */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta name='twitter:title' content={TW_TITLE ?? META_TITLE} />
          <meta name='twitter:description' content={TW_DESCRIPTION ?? META_DESCRIPTION} />
          <meta name='twitter:image' content={TW_IMAGE ?? OG_IMAGE} />
          <meta name='twitter:url' content={TW_URL ?? OG_URL} />
          {/* favicon */}
          <link rel='icon' href={`${FAV_DIR}/favicon.ico`} />
          <link rel='apple-touch-icon' sizes='180x180' href={`${FAV_DIR}/apple-touch-icon.png`} />
          <link rel='icon' type='image/png' sizes='32x32' href={`${FAV_DIR}/favicon-32x32.png`} />
          <link rel='icon' type='image/png' sizes='16x16' href={`${FAV_DIR}/favicon-16x16.png`} />
          <link rel='manifest' href={`${FAV_DIR}/site.webmanifest`} />
          <link rel='mask-icon' href={`${FAV_DIR}/safari-pinned-tab.svg`} color='#5bbad5' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='theme-color' content='#ffffff' />
        </NextHead>
        <body>
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height='0'
              width='0'
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
