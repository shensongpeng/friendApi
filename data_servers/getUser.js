import sequelize from '../data_model/data-base';

const Account = sequelize.model('account');
const User = sequelize.model('user');

export default async (req,res)=>{
  //通过userid查找user
  const {access_token,userId} = req.body;
  const account = await Account.findOne({where:{access_token}});
  if(!account){
    return res.json({
      success:false,
      message:'access_token无效',
      code:10003,
    });
  }else{
    const user = await User.findOne({where:{id:userId}});
    return res.json({
      success:true,
      data:user,
    });
  }
}
