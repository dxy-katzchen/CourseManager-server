const express = require("express");

const router = express.Router();
const expressJoi = require("@escook/express-joi");
const {
  create_course_schema,
  update_course_schema,
  get_course_list_schema,
  delete_course_schema,
  stu_choose_course_schema,
  stu_evaluate_course_schema,
  get_teacher_my_course_stu_schema,
} = require("../schema/course");
const {
  createCourse,
  updateCourse,
  getCourseList,
  deleteCourse,
  stuChooseCourse,
  stuEvaluateCourse,
  getCourseStuList,
  teacherMarkStu,
  getMyCourseList,
} = require("../router_handler/course");
// test
//管理员对课程的CRUD
router.post("/create", expressJoi(create_course_schema), createCourse);
router.post("/update", expressJoi(update_course_schema), updateCourse);
router.get("/getCourseList", expressJoi(get_course_list_schema), getCourseList);
router.post("/delete", expressJoi(delete_course_schema), deleteCourse);
//学生选课
router.post(
  "/student/choose",
  expressJoi(stu_choose_course_schema),
  stuChooseCourse
);
//学生互评
router.post(
  "/student/evaluate",
  expressJoi(stu_evaluate_course_schema),
  stuEvaluateCourse
);
//老师给学生打分
router.post("/teacher/mark", teacherMarkStu);

//老师获取他教的一门课程的所有学生列表
router.get(
  "/teacher/getCourseStuList",
  expressJoi(get_teacher_my_course_stu_schema),
  getCourseStuList
);

//老师获取他教的课程列表
router.get("/teacher/getMyCourseList", getMyCourseList);

module.exports = router;
