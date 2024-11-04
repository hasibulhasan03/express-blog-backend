let blogs = [];
let idCounter = 1;

exports.createBlog = (req, res) => {
    const { title, content } = req.body;
    const newBlog = { id: idCounter++, title, content, createdAt: new Date() };
    blogs.push(newBlog);
    res.status(201).json({ message: "Blog created successfully", data: newBlog });
};

exports.readBlog = (req, res) => {
    res.status(200).json({ message: "Blogs read successfully", data: blogs });
};

exports.updateBlog = (req, res) => {
    const { id, title, content } = req.body;
    const blog = blogs.find(b => b.id === id);

    if (!blog) {
        return res.status(404).json({ message: "Blog not found" });
    }

    blog.title = title || blog.title;
    blog.content = content || blog.content;
    res.status(200).json({ message: "Blog updated successfully", data: blog });
};

exports.deleteBlog = (req, res) => {
    const { id } = req.body;
    const index = blogs.findIndex(b => b.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Blog not found" });
    }

    blogs.splice(index, 1);
    res.status(200).json({ message: "Blog deleted successfully" });
};
