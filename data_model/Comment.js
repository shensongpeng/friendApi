export default (sequelize, DataTypes)=>{
    return sequelize.define('comment',{
        comment_time:DataTypes.STRING,
        comment_content:DataTypes.STRING,
    });
}