import React from 'react'
import Link from 'gatsby-link'
import Header from '../components/header'

const IndexPage = () => (
  <div>
    <Header />
    <div className="Hero">
      <div className="Herogroup">
        <div>
          <h1>
            Learn to <br />design and code React apps
          </h1>
          <p>Complete courses about the best tools and design systems .</p>
          <p>Now go build something great.</p>
          <Link to="/page-2/">Go to page 2</Link>
          <Link to="/video">Watch the video</Link>
        </div>
      </div>
    </div>
  </div>
)

export default IndexPage
