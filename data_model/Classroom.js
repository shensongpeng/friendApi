export default (sequelize, DataTypes)=>{
    return sequelize.define('classroom',{
    	classroom_id:DataTypes.STRING,
      classroom_decription:DataTypes.STRING,
    });
}
