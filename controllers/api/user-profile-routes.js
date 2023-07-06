const router = require("express").Router();
const { User } = require("../../models");

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
router.put("/:id", async (req, res) => {
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

// Definitely authorize this
router.delete("/:id", async (req, res) => {
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
});

module.exports = router;
