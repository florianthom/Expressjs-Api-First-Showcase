export class Service {
	async getAllArticle(req, resp) {
		console.log("getAllArticle", req);
		return {
			data: [],
		};
	}
}