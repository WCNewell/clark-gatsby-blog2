import React from 'react'

import Layout from '../components/layout'
import Listing from '../components/listing'
import Image from '../components/image'

const IndexPage = ({ location }) => (
  <Layout location={ location }>
      <Listing />
    <div style={{
        maxWidth: '300px',
        marginBottom: '1.45rem'
    }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage
