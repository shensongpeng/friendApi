export default (sequelize, DataTypes)=>{
    return sequelize.define('seatstatedetail',{
        start_time:DataTypes.STRING,
        occcupied_time:DataTypes.STRING,
        seat_remark:DataTypes.STRING,
        sate:DataTypes.STRING,
    });
}
