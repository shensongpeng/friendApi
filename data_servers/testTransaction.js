import sequelize from '../data_model/data-base';

const Account = sequelize.model('account');
const User = sequelize.model('user');
const Message = sequelize.model('message');
const Image = sequelize.model('image');
const Seat = sequelize.model('seat');

export default async (req,res)=>{
  const {access_token,message_content,seatId} = req.body;
  // console.log(seatId);
  // var moment = require('moment');
  // const message_time = moment().format('YYYY-MM-DD HH:mm:ss');
  const message_time = new Date();
  console.log(message_time+'\n');
  const account = await Account.findOne({where:{access_token}});
  if(!account){
    return res.json({
      success:false,
      message:'access_token无效',
      code:10003,
    });
  }
  else{
    const user = await account.getUser();
    if(!user){
      return res.json({
        success:false,
        message:'为初始化用户信息',
        code:10004,
      });
    }
    if(!message_content){
      return res.json({
        success:false,
        message:'内容不能为空',
        code:10008,
      })
    }
    if(!seatId){
      //const message = await Message.create({message_content});
      //await message.setUser(user);

      sequelize.transaction((t)=>{
        return Message.create({message_content},{transaction:t})
        .then((message)=>{
          return message.setUser(user,{transaction:t});
        });
      })
      .then((result)=>{})
      .catch((err)=>{});
      return res.json({data:message});
    }
    const message = await Message.create({message_content});
    const seat = await Seat.findOne({where:{id:seatId}});
    if(!seat){
      return res.json({
        success:false,
        message:'座位不存在',
        code:10009,
      });
    }
    await message.setUser(user);
    await message.setSeat(seat);
    res.json({data:message});

  }
}
