export default (sequelize, DataTypes)=>{
    return sequelize.define('teachBuild',{
        teachbuild_name:DataTypes.STRING,
        teachbuild_description:DataTypes.STRING,
    });
}
