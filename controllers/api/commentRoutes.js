const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get all comments
router.get('/', withAuth, async (req, res) => {
    try {
        const commentData = await Blog.findAll({});
        if (!commentData) {
            res.status(404).json({ message: 'no comment found'})
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// get one comment
router.get('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Blog.findByPk(req.params.id, {
            where: {
                id: req.params.id,
                id,
            },
        });
        if (!commentData) {
            res.status(404).json({ message: 'no comment found' });
            return;
        }
        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// post new comment
router.post('/', withAuth, async (req, res) =>{
    try {
        const newComment = await Blog.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newComment);
    } catch(err) {
        res.status(400).json(err);
    }
});

// delete one comment
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Blog.destroy({
          where: {
            id: req.params.id,
          },
        });
    
        if (!commentData) {
          res.status(404).json({ message: 'no comment found' });
          return;
        }
    
        res.status(200).json(commentData);
      } catch (err) {
        res.status(500).json(err);
      }
});

// module.exports = router;