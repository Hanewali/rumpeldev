import { gql } from '@apollo/client'

export const POSTS = gql`query posts($query: String!, $limit: Int!) {
    posts(query: $query, type: Post, first: $limit) {
      _id
      title
      contentSummary
      imageUrl
      authorName
    }
}`

export const PORTFOLIO_APPLICATIONS = gql`query portfolioApplication($query: String!, $limit: Int!) {
  portfolioApplications(query: $query, type: PortfolioApplication, first: $limit) {
    _id
    name
    image
    description
  }
}`

export const POST = gql`query post($query: String!) {
    posts(query: $query, type: Post) {
      _id
      title
      contentSummary
      imageUrl
      authorName
    }
}`
