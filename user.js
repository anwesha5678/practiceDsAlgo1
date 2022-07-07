module.exports = (sequelize,type)=>{
    const user = sequelize.define('user',{
        id:{
            type:type.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement:true
        },
        uuidIdentifier:{
            type: type.UUID,
            defaultValue: type.UUIDV4,
            allowNull: false
        },
        firstName:{
            type:type.STRING,
            allowNull:true
        },
        lastName:{
            type:type.STRING,
            allowNull:true
        },
        password:{
            type:type.STRING,
            allowNull:true
        },
        email:{
            type:type.STRING,
            allowNull:true
        },
        city:{
            type:type.STRING,
            allowNull:true
        },
        address:{
            type:type.STRING,
            allowNull:true
        },

    },{
        underscored:true,
        freezeTableName:false
    })

    return user
}