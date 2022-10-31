export const EnvConfiguration = () => ({

    environmenr: process.env.NODE_ENV || 'dev',
    mongoDb: process.env.MONGODB,
    port: +process.env.PORT || 3001,
    defaulLimit: +process.env.DEFAUL_LIMIT || 20,

})