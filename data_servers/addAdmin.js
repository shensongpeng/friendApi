import sequelize from '../data_model/data-base';
import createToken from '../utils/create-token';

const Adminstrator = sequelize.model('adminstrator');

export default async (req,res)=>{
  const {user_name,user_pwd} = req.body;

  // const adminstrator = await Adminstrator.findOne({where:{user_name,user_pwd,{id:1}}});
  // if(!adminstrator){
  //   return res.json({
  //     success:false,
  //     message:'管理员无权限或管理员不存在',
  //     code:10011,
  //   });
  // }
  const access_token = createToken(user_name,user_pwd);
  const adminstrator = await Adminstrator.create({user_name,user_pwd,access_token});
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
