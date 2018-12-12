import React from 'react'
import styles from 'styled-components'
import { StaticQuery, graphql, Link } from 'gatsby'

const POST_ARCHIVE_QUERY = graphql`
    query BlogPostArchive {
        allMarkdownRemark(limit: 5, sort: {
                order: DESC,
                fields: [frontmatter___date]
            }) {
            edges {
                node {
                    frontmatter {
                        title
                        slug
                    }
                }
            }
        }
    }
`

const ArchiveTitle = styles.h3`
    margin: 20px 0px 20px 0px;
`

const ArchiveList = styles.ul`
    padding: 0;
    margin: 0;
    list-style: none;
    a {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
            Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font - size: 0.8 rem;
        text - decoration: underline;
        color: rebeccapurple;
    }
`

const Archive = () => (
  <StaticQuery
    query = { POST_ARCHIVE_QUERY }

    render={({ allMarkdownRemark }) => (
      <>
       <aside>
           <ArchiveTitle>Archive</ArchiveTitle>
           <ArchiveList>
           { allMarkdownRemark.edges.map(edge => (
               <li key={ edge.node.frontmatter.slug }>
                   <Link to={`/posts${ edge.node.frontmatter.slug }`}>
                            { edge.node.frontmatter.title }
                    </Link>
               </li>
           ))}
           </ArchiveList>
       </aside>
      </>
    )}
  />
)

export default Archive
