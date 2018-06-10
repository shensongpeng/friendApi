export default (sequelize, DataTypes)=>{
    return sequelize.define('message',{
        message_content:DataTypes.STRING,
    });
}
