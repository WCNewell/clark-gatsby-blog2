import React from 'react'
import styled from 'styled-components'
import { Link, StaticQuery, graphql } from 'gatsby'

const LISTING_QUERY = graphql`
    query BlogPostListing {
        allMarkdownRemark(limit: 10, sort: {
            order: DESC,
            fields: [frontmatter___date]
        }) {
            edges {
                node {
                    excerpt
                    frontmatter {
                        title
                        date(formatString: "MMMM DD, YYYY")
                        slug
                    }
                }
            }
        }
    }
 `

const Post = styled.article`
    box-shadow: 0px 3px 10px rgba(25, 17, 34, 0.10);
    padding: 1rem; 
    border-raduis: 4px;
    margin-bottom: 1rem;
    a {
        color: #000;
        text-decoration: none;
    }
    p {
        font-size: 0.8rem;
    }
    h2 {
        margin-bottom: 0;
    }
    .read-more {
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        font-size: 0.8rem;
        text-decoration: underline;
        color: #1B97CB;

    }

`

 const Listing = () => (
    <StaticQuery
        query={LISTING_QUERY}
        render={({ allMarkdownRemark }) => (
            allMarkdownRemark.edges.map(({ node }) => (
                <Post key={ node.frontmatter.slug }>
                    <Link to={ `/posts${ node.frontmatter.slug }` }>
                        <h2>{ node.frontmatter.title }</h2>
                    </Link>
                    <p>{ node.frontmatter.date }</p>
                    <p>{ node.excerpt }</p>
                    <Link className='read-more' to={ `/posts${ node.frontmatter.slug }` }>Read More</Link>
                </Post>
            ))
        )}
    />
)

export default Listing

