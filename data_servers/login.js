import sequelize from '../data_model/data-base';
import createToken from '../utils/create-token';

//数据模型
const Account = sequelize.model('account');
const User = sequelize.model('user');

export default async (req,res)=>{
  //获得请求内容 连接数据库查询account信息
  const {email,password} = req.body;
  const account = await Account.findOne({where:{email:email,password:password}});
  //console.log(temp);
  if(account){
    //更新accesstoken
    const access_token = createToken(email,password);
    account.access_token = access_token;
    await account.save();
    return res.json({
      success:true,
      data:{
        access_token,
        userId:account.userId,
      }
    })
  }else{
    return res.json({
      success:false,
      message:'用户名或密码错误',
      code:10002,s
    });
  }
}
