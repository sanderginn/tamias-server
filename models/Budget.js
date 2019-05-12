export default (sequelize, type) => {
  return sequelize.define('budget', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    userId: type.STRING,
    startDate: type.DATEONLY,
    endDate: type.DATEONLY
  })
}