import sequelize from '../data_model/data-base';

const Adminstrator = sequelize.model('adminstrator');
const School = sequelize.model('school');

export default async (req,res)=>{
  const {access_token,school_name,school_description} = req.body;

  const adminstrator = await Adminstrator.findOne({where:{access_token}});
  if(!adminstrator){
    return res.json({
      success:false,
      message:'access_token无效',
      code:10003,
    });
  }
  const school = await School.create({school_name,school_description});
  if(!school){
    return res.json({
      success:false,
      message:'添加学校失败',
      code:10010,
    });
  }else{
    return res.json({
      success:true,
      data:school,
    });
  }

}
