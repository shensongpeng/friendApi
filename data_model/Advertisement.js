export default (sequelize, DataTypes)=>{
    return sequelize.define('advertisement',{
        ad_content:DataTypes.STRING,
    });
}