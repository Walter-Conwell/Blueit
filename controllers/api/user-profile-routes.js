const router = require("express").Router();
const { User } = require("../../models");
const {withAuth} = require("../../utils/withAuth");

// Already have route to get all users
router.get("/", (req, res) => {});

router.get("/:id", async (req, res) => {
    const user = await User.findByPk(req.params.id);
    if(!user){
        res.status(500).json({ message: "No user with that ID" });
        return;
    }
    res.status(200).json(user);
});

// Unsure if we need a post route
router.post("/", (req, res) => {});

// authorize route I think
router.put("/:id", withAuth, async (req, res) => {
    User.update(req.body, {
        where: {
            id: req.params.id,
        },
        })
        .then((updatedUser) => res.json(updatedUser))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Delete an existing user
// Can only delete the user they're logged in as
// ** ADD CODE TO LOG THEM OUT ONCE DELETED IF NEEDED **
router.delete("/:id", withAuth, async (req, res) => {
    if(req.session.user_id === req.params.id){
        try {
            const userData = await User.destroy({ where: { id: req.params.id }});
            if(!userData){
                res.status(404).json({ message: "No user found with that ID" });
                return;
            }
            res.status(200).json(userData);
        } catch (err) {
            res.status(500).json(err);
        }
    } else {
        res.status(403).json({ message: "You are not logged in as the user you are attempting to delete." });
    }
});

module.exports = router;
