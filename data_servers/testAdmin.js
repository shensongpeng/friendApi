import sequelize from '../data_model/data-base';

const Adminstrator = sequelize.model('adminstrator');

export default async (req,res)=>{
  const {user_name,user_pwd} = req.body;

  
  const adminstrator = await Adminstrator.create({user_name,user_pwd});
  if(!adminstrator){
    return res.json({
      success:false,
      message:'添加管理员失败',
      code:10012,
    });
  }else{
    return res.json({
      success:true,
      data:adminstrator,
    });
  }

}
