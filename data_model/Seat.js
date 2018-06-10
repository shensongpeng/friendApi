export default (sequelize, DataTypes)=>{
    return sequelize.define('seat',{
    	info:DataTypes.STRING,
    });
}