import sequelize from '../data_model/data-base';

const User = sequelize.model('user');
const Account = sequelize.model('account');

export default async (req,res)=>{
  const {access_token,nickname} = req.body;
  const account = await Account.findOne({where:{access_token}});
  if(!account){
    return res.json({
      success:false,
      message:'access_token无效',
      code:10003,
    });
  }else{
    const users = await User.findAll({where:{nickname}});
    return res.json({
      success:true,
      data:users,
    });
  }
}
