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
function getBlogContent() {
  // console.log(req.session.user_id);
  var blogTitle = document.getElementById("blogTitle").value;
  var blogTopic = document.getElementById("blogTopic").value;
  var blogContent = quill.root.innerHTML;

  var blogPost = {
    title: blogTitle,
    topic: blogTopic,
    content: blogContent,
  };

  saveBlogContent(blogPost);

  // do something with blog post data
  console.log(blogPost);
}

//this actually saves the content to SQL database
async function saveBlogContent(blogPost) {
  const response = await fetch("/api/blogposts", {
    method: "POST",
    body: JSON.stringify({
      post_title: blogPost.title,
      post_text: blogPost.content,
      // user_id: req.session.user_id, //This is just a placeholder for now
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
}

var saveBtn = document.getElementById("saveBlogBtn");
saveBtn.addEventListener("click", getBlogContent);
