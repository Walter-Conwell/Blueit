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

function getBlogContent() {
  var blogTitle = document.getElementById("blogTitle").value;
  var blogTopic = document.getElementById("blogTopic").value;
  var blogContent = quill.root.innerHTML;

  var blogPost = {
    title: blogTitle,
    topic: blogTopic,
    content: blogContent,
  };

  // do something with blog post data
  console.log(blogPost);
}

var saveBtn = document.getElementById("saveBlogBtn");
saveBtn.addEventListener("click", getBlogContent);
