import React from 'react'

import type { GetStaticProps, NextPage } from 'next'

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {},
  }
}

// import dynamic from 'next/dynamic'

// export default dynamic(
//   async () => {
//     const module = await import('src/components/templates/Home')
//     return module.HomeTemplate
//   },
//   { ssr: false }
// )

const Home: NextPage = () => {
  return <div>This is Template</div>
}

export default Home
