import sequelize from '../data_model/data-base';

const Account = sequelize.model('account');
const User = sequelize.model('user');
const Message = sequelize.model('message');
const Image = sequelize.model('image');

const Op = Sequelize.Op;

export default async (req,res)=>{
  const {access_token,minId,userId,count} = req.body;
    const account = await Account.findOne({where:{access_token}});
    if(!account){
        return res.json({
            success:false,
            message:'access_token无效',
            code:10003,
        })
    }
}
