import { writable } from "svelte/store";

export const CommentsStore = writable([
	{
		id: 0,
		user: "weblab",
		title: "Creating is so much fun now!",
		body: "I'm learning so much from this course. It's amazing!",
	},
]);
