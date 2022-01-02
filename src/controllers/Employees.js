const EmployeesModels = require("../models/Employees");
const { Sequelize } = require("sequelize");
const { success, failed } = require("../helpers/response");
const Op = Sequelize.Op;


const Employees = {
    getAll: async (req, res) => {
      try {
        const { query } = req;
        const search = query.search === undefined ? "" : query.search;
        const field = query.field === undefined ? "id" : query.field;
        const typeSort = query.sort === undefined ? "DESC" : query.sort;
        const limit = query.limit === undefined ? 100 : parseInt(query.limit);
        const page = query.page === undefined ? 1 : query.page;
        const offset = page === 1 ? 0 : (page - 1) * limit;
  
        const all = await EmployeesModels.findAll({
          where: {
                name: {
                  [Op.like]: `%${search}%`,
                },
              },
        })
  
        const result = await EmployeesModels.findAll({
          where: {
                name: {
                  [Op.like]: `%${search}%`,
                },
              },
              offset,
              limit,
              field,
              typeSort,
            })
            const response = {
              result,
              totalPage: Math.ceil(all.length/limit),
              limit,
              page,
            }
          success(res, response, 'Get All Employees Success');
      } catch (error) {
        failed(res, 404, error);
      }
    }
}

module.exports = Employees;