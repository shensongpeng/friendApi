import sequelize from '../data_model/data-base';

const Adminstrator = sequelize.model('adminstrator');
const School = sequelize.model('school');
const TeachBuild = sequelize.model('teachBuild');
const Classroom = sequelize.model('classroom');
const Seat = sequelize.model('seat');

export default async (req,res)=>{
  const {access_token,school_name,teachbuild_name,classroom_id,info} = req.body;

  const adminstrator = await Adminstrator.findOne({where:{access_token}});
  const school = await School.findOne({where:{school_name}});
  const teachBuild = await TeachBuild.findOne({where:{teachbuild_name}});
  const classroom = await Classroom.findOne({where:{classroom_id}});
  if(!adminstrator){
    return res.json({
      success:false,
      message:'access_token无效',
      code:10003,
    });
  }
  if(!school){
    return res.json({
      success:false,
      message:'学校不存在',
      code:10013,
    });
  }
  if(!teachBuild){
    return res.json({
      success:false,
      message:'教学楼未存在',
      code:10016,
    });
  }
  if(!classroom){
    return res.json({
      success:false,
      message:'教室未存在',
      code:10018,
    });
  }else{
    const seat = await Seat.create({info});
    if(!seat){
      return res.json({
        success:false,
        message:'创建座位失败',
        code:10019,
      });
    }
    await school.addSeat(seat);
    await teachBuild.addSeat(seat);
    await classroom.addSeat(seat);
    return res.json({
      success:true,
      data:seat,
    });
  }

}
