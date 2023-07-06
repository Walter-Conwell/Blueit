// const { BlogPostTopic } = require("../../models");
// initializing Quill
var toolbarOptions = [
  ["bold", "italic", "underline", "strike"],
  ["blockquote", "code-block", "image"],

  [{ header: 1 }, { header: 2 }],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ script: "sub" }, { script: "super" }],
  [{ indent: "-1" }, { indent: "+1" }],
  [{ direction: "rtl" }],

  [{ size: ["small", false, "large", "huge"] }],
  [{ header: [1, 2, 3, 4, 5, 6, false] }],

  [{ color: [] }, { background: [] }],
  [{ font: [] }],
  [{ align: [] }],

  ["clean"],
];

var quill = new Quill("#editor", {
  modules: {
    toolbar: toolbarOptions,
  },
  theme: "snow",
});

//This is the listener for the save button
async function getBlogContent() {
  console.log("clicked");
  var blogTitle = document.getElementById("blogTitle").value;
  var blogTopic = document.getElementById("blogTopic").value;
  var blogContent = quill.root.innerHTML;

  var blogPost = {
    title: blogTitle,
    topic: blogTopic,
    content: blogContent,
  };

  await saveBlogContent(blogPost);

  location.replace("/");

  // const topicIDs = await saveTopicsAndRetrieveIDs(blogPost);
  // console.log(`Blog post ID is ${blogPostID} and topic IDs are ${topicIDs}`);
  // blogPostTopicSave(blogPostID, topicIDs);

  //makeTheBlogPostTopicTableentry(blogPostID, topicIDs); Not the final method name
  //We need to create the post route for making the blog post topic table entry

  // do something with blog post data
  // console.log(blogPost);
}

//this actually saves the blog post content to SQL database and returns the id of the newly created post
async function saveBlogContent(blogPost) {
  await fetch("/api/blogposts/full", {
    method: "POST",
    body: JSON.stringify({
      post_title: blogPost.title,
      post_text: blogPost.content,
      topics: blogPost.topic,
      // user_id: req.session.user_id, //This is just a placeholder for now
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // const returnedBlogPostData = await response.json();
  // return returnedBlogPostData.id;
}

//this function might need to return the topic IDs back out to be used for the through table
async function saveTopicsAndRetrieveIDs(blogPost) {
  // console.log(blogPost.topic);
  const response = await fetch("/api/topics", {
    method: "POST",
    body: JSON.stringify({
      topic_name: blogPost.topic,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const returnedTopicData = await response.json();
  var topicIDs = returnedTopicData.returnedTopics.map((topic) => topic.id);
  // console.log(topicIDs);
  return topicIDs;
}

// async function blogPostTopicSave(blogPostID, topicIDs) {
//   //loops through the topicID array to create a new entry for each topic ID
//   for (topicID of topicIDs) {
//     console.log(`Blog post ID is ${blogPostID} and topic ID is ${topicID}`);
//     var newBlogPostTopic = await BlogPostTopic.create({
//       blog_post_id: blogPostID,
//       topic_id: topicID,
//     });
//   }
// }

var saveBtn = document.getElementById("saveBlogBtn");
saveBtn.addEventListener("click", getBlogContent);
