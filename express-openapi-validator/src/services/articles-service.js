export async function getAllArticle(articleQueryFilterDto, paginationFilterDto) {
    const myArticles = [{ id: "4ca352f0-55fb-416b-b1e7-b7762d440511", title: 'Hello World' }]
    return {data: myArticles};
};