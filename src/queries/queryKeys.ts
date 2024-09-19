export const postsKeys = {
	create: () => ["create-post"],
	one: (id: number | string) => ["post", id],
	oneWithComments: (id: number | string) => ["post-comments", id],
	all: () => ["posts"],
	update: () => ["update-post"],
	delete: () => ["delete-post"],
};

export const usersKeys = {
	one: (id: number | string) => ["user", id],
	oneWithPosts: (id: number | string) => ["user-posts", id],
};

export const commentsKeys = {
	update: () => ["update-comment"],
};

export const quotesKeys = {
	oneRandom: () => ["random-quote"],
	oneRandomPerHour: () => ["random-quote", "hour"],
	oneRandomPerDay: () => ["random-quote", "day"],
};
