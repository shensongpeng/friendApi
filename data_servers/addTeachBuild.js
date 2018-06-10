import sequelize from '../data_model/data-base';

const School = sequelize.model('school');
const TeachBuild = sequelize.model('teachBuild');

export default async (req,res)=>{

  //未加身份验证
  const {access_token,teachbuild_name,teachbuild_description,schoolId} = req.body;
  const school = await School.findOne({where:{id:schoolId}});
  if(!school){
    return res.json({
      success:false,
      message:'学校不存在',
      code:10013,
    });
  }else{

    //事务
    // sequelize.transaction((t)=>{
    //   return TeachBuild.create({teachbuild_name,teachbuild_description},{transaction:t})
    // })
    // .then((teachbuild)=>{
    //   return teachbuild.setSchool(school,{transaction:t});
    // })
    // .then((result)=>{
    //   console.log(result);
    // })
    // .catch((err)=>{
    //   console.log(err);
    // })
    if((TeachBuild.findOne({where:{teachbuild_name:teachbuild_name}}))){
      return res.json({
        success:false,
        message:'教学楼已经存在',
        code:10015,
      });
    }
    const teachBuild = await TeachBuild.create({teachbuild_name,teachbuild_description});
    if(!teachBuild){
      return res.json({
        success:false,
        message:'添加教学楼失败',
        code:10014,
      });
    }else{
      await school.addTeachbuild(teachBuild);
      return res.json({
        success:true,
        data:teachBuild,
      });
    }
  }
}
