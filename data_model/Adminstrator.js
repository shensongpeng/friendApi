export default (sequelize, DataTypes)=>{
    return sequelize.define('adminstrator',{
        user_name:DataTypes.STRING,
        user_pwd:DataTypes.STRING,
        access_token:DataTypes.STRING,
    });
}
