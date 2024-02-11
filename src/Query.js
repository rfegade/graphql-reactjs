// const githubQuery = {
//   query: `
//     {
//         viewer {
//             name
//             repositories(first: 10 orderBy: {field:CREATED_AT, direction: DESC}) {
//             nodes {
//                 name
//                 description
//                 id
//                 url
//             }
//             }
//         }
//     }
//     `,
// };

// Add serach functionality to query
const githubQuery = (
  pageCount,
  queryString,
  paginationKeyword,
  paginationString
) => {
  // ... on Repository is the fragment that returens search on repositories otherwise it can search in various other places
  return {
    query: `
    {
        viewer {
            name
        }
        search(query: "${queryString} user:rfegade sort:updated-desc", type: REPOSITORY, ${paginationKeyword}:${pageCount}, ${paginationString}) {
            repositoryCount
            edges {
            cursor
            node {
                ... on Repository {
                name
                description
                id
                url
                licenseInfo {
                    spdxId
                }
                viewerSubscription
                }
            }
            }
            pageInfo{
            startCursor
            endCursor
            hasNextPage
            hasPreviousPage
            }
            
        }
    }`,
  };
};

export default githubQuery;
