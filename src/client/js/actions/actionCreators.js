export const LOAD_ARTICLES = 'LOAD_ARTICLES';

export function loadArticles(offset, limit){
  return {
    type: LOAD_ARTICLES,
    offset,
    limit,
    articles
  }
}
