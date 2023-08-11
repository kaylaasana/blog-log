const router = require('express').Router();
const { Blog, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all blogs
router.get('/', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findAll({
            include: [{ model: Comment }],
        });
        if (!blogData) {
            res.status(404).json({ message: 'no blogs found'})
            return;
        }
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get one blog
router.get('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.findByPk(req.params.id, 
        {
            where: {
                id: req.params.id,
                id,
            },
        },
        {
            include: [{ model: Comment }],
        });
        if (!blogData) {
            res.status(404).json({ message: 'no blog found' });
            return;
        }
        res.status(200).json(blogData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// post new blog
router.post('/', withAuth, async (req, res) =>{
    try {
        const newBlog = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newBlog);
    } catch(err) {
        res.status(400).json(err);
    }
});

// update one blog
router.put('/:id', withAuth, async (req, res) => {
    try {
        const updatedBlog = await Blog.update(
            {
                ...req.body,
            },
            {
              where: {
                id: req.params.id,
                id,
              },
            }
        ).then( ()=> {
            Comment.findAll({
                where: {
                    comment_id: req.params.id
                }
            })
        })
        res.status(200).json(updatedBlog)
    } catch(err){
        res.status(500).json(err);
    }
});

// delete one blog
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await Blog.destroy({
          where: {
            id: req.params.id,
          },
        });
    
        if (!blogData) {
          res.status(404).json({ message: 'no blog found' });
          return;
        }
    
        res.status(200).json(blogData);
      } catch (err) {
        res.status(500).json(err);
      }
});

module.exports = router;