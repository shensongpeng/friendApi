import sequelize from '../data_model/data-base';

const Account = sequelize.model('account');
const User = sequelize.model('user');

export default async (req,res)=>{
  const {access_token,userId} = req.body;
  const account = await Account.findOne({where:{access_token}});
  if(!account){
    return res.json({
      success:false,
      message:'access_token无效',
      code:10003,
    });
  }else{
    console.log(userId);
    const myself = await account.getUser();
    const friend = await User.findOne({where:{id:userId}});
    if(!friend){
      return res.json({
        success:false,
        message:'userId无效',
        code:10005,
      });
    }
    await myself.addFollowed(friend);

    return res.json({
      success:true,
    });
  }
}
