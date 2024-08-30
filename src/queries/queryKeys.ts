export const postsKeys = {
	create: () => ["create-post"],
	one: (id: string) => ["post", id],
	all: () => ["posts"],
	update: () => ["update-post"],
	delete: () => ["delete-post"],
};
