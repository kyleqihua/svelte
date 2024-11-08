
<script>
	import Comment from "../../lib/components/Comment.svelte";
	import { CommentsStore } from "../../lib/stores/store";
	// let comments = [
	// 	{
	// 		id: 0,
	// 		user: "weblab",
	// 		title: "Creating is so much fun now!",
  //     body: "I'm learning so much from this course. It's amazing!"
  //   }
  // ]
  let newCommentTitle = "";
  
  const addNewComment = () => {
    const newComment = {
      id: Math.random()*10000,
      title: newCommentTitle,
      user: "anybody",
      body: "any comment"
    };
    CommentsStore.update((prev) => [newComment].concat(prev));
    newCommentTitle = "";
  }

</script>
<h1>Comments</h1>
<form on:submit={addNewComment}>
  <input type="text" bind:value={newCommentTitle}/>
  <button>Add Comment</button>
</form>
<!-- special syntax in svelte to loop through the comments -->
<!-- need to add dollar sign to access the store -->
{#each $CommentsStore as comment(comment.id)}
  <Comment {...comment}/>
{/each}

