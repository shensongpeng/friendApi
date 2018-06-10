import sequelize from '../data_model/data-base';

const Adminstrator = sequelize.model('adminstrator');
const School = sequelize.model('school');
const TeachBuild = sequelize.model('teachBuild');
const Classrom = sequelize.model('classroom');

export default async (req,res)=>{
  const {access_token,school_name,teachbuild_name,classroom_id,classroom_decription} = req.body;

  const adminstrator = await Adminstrator.findOne({where:{access_token}});
  const school = await School.findOne({where:{school_name}});
  const teachBuild = await TeachBuild.findOne({where:{teachbuild_name}});
  if(!adminstrator){
    return res.json({
      success:false,
      message:'access_token无效',
      code:10003,
    });
  }
  if(!school){
    return res.json({
      success:false,
      message:'学校不存在',
      code:10013,
    });
  }
  if(!teachBuild){
    return res.json({
      success:false,
      message:'教学楼未存在',
      code:10016,
    });
  }else{
    const classrom = await Classrom.create({classroom_id,classroom_decription});
    if(!classrom){
      return res.json({
        success:false,
        message:'创建教室失败',
        code:10017,
      });
    }
    await school.addClassroom(classrom);
    await teachBuild.addClassroom(classrom);
    return res.json({
      success:true,
      data:classrom,
    });
  }

}
