
const ApplicationModal = require('../modal/user3');

exports.createApplication = async (req, res) => {
    if (!req.body.fullnames && !req.body.headline && !req.body.companyname) {
        res.status(400).send({ message: "Content can not be empty!" });
    }

    const applicationuser = new ApplicationModal({
        fullnames: req.body.fullnames,
        headline: req.body.headline,
        companyname: req.body.companyname,
        position: req.body.position,
        dateofjoining: req.body.dateofjoining,
        workdescription: req.body.workdescription,
        usedskills: req.body.usedskills,
        skillsname: req.body.skillsname,
        yoe: req.body.yoe,
        projecttitle: req.body.projecttitle,
        projecturl: req.body.projecturl,
        projectdescription: req.body.projectdescription,
        projectdurations: req.body.projectdurations,
        name: req.body.name,
        issuingorganisation: req.body.issuingorganisation,
        certificate: req.body.certificate,
        email: req.body.email,
        phone: req.body.phone,
        skypeid: req.body.skypeid
    });

    await applicationuser.save().then(data => {
        res.send({
            message: "Applications data successfully inserted",
            applicationuser: data
        });
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating applicationuser"
        });
    });
};

exports.findAll = async (req, res) => {
    try {
        const application = await ApplicationModal.find();
        res.status(200).json(application);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};