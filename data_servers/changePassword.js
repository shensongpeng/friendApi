import sequelize from '../data_model/data-base';

const Account = sequelize.model('account');

export default async (req,res)=>{
  const {access_token,email,oldPassword,newPassword} = req.body;
  const account = await Account.findOne({where:{access_token}});
  if(!account){
    res.json({
      success:false,
      message:'access_token无效',
      code:10003,
    });
  }
  if(!newPassword || newPassword == ' '){
    return res.json({
      success:false,
      message:'新密码不符合规范',
      code:1,
    });
  }
  if(account.password != oldPassword){
    res.json({
      success:false,
      message:'旧密码错误',
      code:10006,
    })
  }else {
    console.log('\n\n'+newPassword);
    account.password = newPassword;
    await account.save();
    res.json({
      success:true,
      data:account,
    });
  }

}
