export default (sequelize, DataTypes)=>{
    return sequelize.define('school',{
        school_name:DataTypes.STRING,
        school_description:DataTypes.STRING,
    });
}