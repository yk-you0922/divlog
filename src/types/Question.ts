export type Question = {
	id?: number;
	title: string;
	description: string;
	categoryId: number;
	files: string[];
	userId: number;
	username: string;
	created_at: string;
	updated_at: string;
	status: number;
};
