import sequelize from '../data_model/data-base';

const Adminstrator = sequelize.model('adminstrator');
const School = sequelize.model('school');
const TeachBuild = sequelize.model('teachBuild');
const Classroom = sequelize.model('classroom');
const Seat = sequelize.model('seat');

export default async (req,res)=>{

  const classroom = await Classroom.findAll();
  return res.json({
    success:true,
    data:classroom.length,
  });


}
