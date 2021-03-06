import sequelize from '../data_model/data-base';
import createToken from '../utils/create-token';

const Account = sequelize.model('account');

export default async (req,res)=>{
  const {email,password} = req.body;
  const temp = await Account.findOne({where:{email}});
  console.log(temp);
  if(temp){
    return res.json({
      success:false,
      message:'用户名已经存在',
      code:10001,
    })
  }
  const access_token = createToken(email,password);
  const account = await Account.create({email,password,access_token});

  return res.json({
    success:true,
    data:{
      access_token,
    },
  });
}
