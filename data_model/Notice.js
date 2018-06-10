export default (sequelize, DataTypes)=>{
    return sequelize.define('notice',{
        notice_content:DataTypes.STRING,
    });
}