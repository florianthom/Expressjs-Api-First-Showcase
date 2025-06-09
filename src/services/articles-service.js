export const getAllArticles = async ({ articleQueryFilterDto, paginationFilterDto }) => {
    const myArticle = {
        id: 1,
        title: 'Monkey-patched article',
        title2: 'title2',
    };
    return [myArticle];
};