import students from '../models/students';

class StudentController {
    static getAllStudents(req,res){
        return res.status(200).json({
            students,
            message:"This method contains all the students"
        });
    }

    static getSingleStudent(req,res){
        const findStudent = students.find(student=>{
            students.id===parseInt(req.params.id,10);
        });
        if(findStudent){
            res.status(200).json({
                findStudent,
                message:"This method returns single student"
            });
        }else{
            res.status(404).json({
                message:'No matching student is found for a given id'
            });
        }
    }
}

export default StudentController;