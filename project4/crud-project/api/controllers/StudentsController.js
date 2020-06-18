/**
 * StudentsController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    list: function (req, res)
    {
        Students.find({}).exec(function (err, students)
        {
            if (err)
            {
                res.send(500, { error: err });
            }
            res.view('list', { students: students });
        });
    },
    add: function (req, res)
    {
        res.view('add');
    },
    create: function (req, res)
    {
        let name = req.body.name;
        let email = req.body.email;
        let course = req.body.course;
        let semester = req.body.semester;
        Students.create({ name: name, email: email, course: course, semester: semester }).exec(function (err)
        {
            if (err)
            {
                res.send(500, { error: err });
            }
            res.redirect('/students/list');
        });
    },
    delete: function (req, res)
    {
        Students.destroy({ id: req.params.id }).exec(function (err, err2)
        {
            if (err)
            {
                res.send(500, { error: err });
            }
            res.redirect('/students/list');
        });
    },
    edit: function (req, res)
    {
        Students.find({ id: req.params.id }).exec(function (err, st)
        {
            if (err)
            {
                res.send(500, { error: err });
            }
            res.view('edit', { student: st });
        })
    },
    update: function (req, res)
    {
        let name = req.body.name;
        let email = req.body.email;
        let course = req.body.course;
        let semester = req.body.semester;
        Students.update({id: req.params.id},{ name: name, email: email, course: course, semester: semester }).exec(function (err)
        {
            if (err)
            {
                res.send(500, { error: err });
            }
            res.redirect('/students/list');
        });
    },
};

